using backend_app.Models;
using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Web.Http;

namespace backend_app.Controllers
{
    [RoutePrefix("api/Test")]
    public class ShopController : ApiController
    {   
        private readonly string _connectionString;

        //public ShopController(string connectionString)
        //{
        //    _connectionString = connectionString;
        //}


        public ShopController()
        {
            _connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
        }



        [HttpGet]
        [Route("GetAllProducts")]
        public Response GetAllProducts()
        {
            List<Products> lstproducts = new List<Products>();
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("Select * from tblProducts", connection))
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Products products = new Products
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            Name = Convert.ToString(reader["Name"]),
                            Image = Convert.ToString(reader["Image"]),
                            ActualPrice = Convert.ToDecimal(reader["ActualPrice"]),
                            DiscountedPrice = Convert.ToDecimal(reader["DiscountedPrice"])
                        };
                        lstproducts.Add(products);
                    }
                }
            }

            Response response = new Response();
            if (lstproducts.Count > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Data Found";
                response.Listproducts = lstproducts;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "No Data Found";
                response.Listproducts = null;
            }
            return response;
        }
    }
}



