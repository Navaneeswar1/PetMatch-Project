using System;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using backend_app.Models;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using System.Diagnostics;

namespace backend_app.Controllers
{
    [RoutePrefix("api/Test")]

    public class CustomerController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;

        [HttpPost]
        [Route("Registration")]
        public string Registration(Registration customer)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("page_Registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
                cmd.Parameters.AddWithValue("@PhoneNo", customer.PhoneNo);
                cmd.Parameters.AddWithValue("@Address", customer.Address);
                cmd.Parameters.AddWithValue("@PetName", customer.PetName);
                cmd.Parameters.AddWithValue("@PetGender", customer.PetGender);
                cmd.Parameters.AddWithValue("@Age", customer.Age);
                cmd.Parameters.AddWithValue("@Breed", customer.Breed);
                cmd.Parameters.AddWithValue("@health_status", customer.health_status);
                cmd.Parameters.AddWithValue("@description", customer.description);
                cmd.Parameters.AddWithValue("@Password", customer.Password);
                cmd.Parameters.AddWithValue("@IsActive", customer.IsActive);
                

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                if (i > 0)
                {
                    msg = "Sucessfully";
                }
                else
                {
                    msg = "Error";
                }
               
            }
            catch (Exception e) {
                msg = e.Message;
            }
            return msg;

        }

        //[HttpPost]
        //[Route("Login")]
        //public IHttpActionResult Login(Models.Registration customer)
        //{
        //    try
        //    {
        //        adapter = new SqlDataAdapter("Page_Login", conn);
        //        adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        //        adapter.SelectCommand.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
        //        adapter.SelectCommand.Parameters.AddWithValue("@Password", customer.Password);
        //        DataTable dt = new DataTable();
        //        adapter.Fill(dt);

        //        if (dt.Rows.Count > 0)
        //        {
        //            DataRow row = dt.Rows[0];

        //            var userData = new Models.Registration
        //            {
        //                CustomerName = row["CustomerName"].ToString(),
        //                Address = row["Address"].ToString(),
        //                Age = row["Age"].ToString(),
        //                Breed = row["Breed"].ToString(),
        //                PetGender = row["PetGender"].ToString(),
        //                PhoneNo = row["PhoneNo"].ToString(),
        //                description = row["description"].ToString(),
        //                health_status = row["health_status"].ToString()
        //                // Add other properties as needed
        //            };

        //            return Ok(new { message = "User is valid", userData });
        //        }
        //        else
        //        {
        //            return Ok(new { message = "User is Invalid" });
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        return BadRequest($"Error: {e.Message}");
        //    }
        //}

        //[HttpPost]
        //[Route("LoginAndFetchData")]
        //public IHttpActionResult LoginAndFetchData(Models.Registration customer)
        //{
        //    try
        //    {
        //        // Execute login query
        //        adapter = new SqlDataAdapter("Page_Login", conn);
        //        adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        //        adapter.SelectCommand.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
        //        adapter.SelectCommand.Parameters.AddWithValue("@Password", customer.Password);
        //        DataTable dtLogin = new DataTable();
        //        adapter.Fill(dtLogin);

        //        // Execute additional query
        //        var additionalQuery = "SELECT * FROM RegistrationPage WHERE PetGender <> @CurrentPetGender AND Breed = @CurrentBreed AND health_status = 'Yes'";

        //        //var additionalQuery = "SELECT * FROM RegistrationPage WHERE PetGender <> 'male' AND Breed = 'labrador' AND health_status = 'Yes'";
        //        using (var additionalCommand = new SqlCommand(additionalQuery, conn))
        //        {
        //            additionalCommand.CommandType = CommandType.Text;
        //            DataTable dtAdditional = new DataTable();
        //            using (var additionalAdapter = new SqlDataAdapter(additionalCommand))
        //            {
        //                additionalAdapter.Fill(dtAdditional);
        //            }

        //            if (dtLogin.Rows.Count > 0)
        //            {
        //                DataRow rowLogin = dtLogin.Rows[0];

        //                var userData = new Models.Registration
        //                {
        //                    CustomerName = rowLogin["CustomerName"].ToString(),
        //                    Address = rowLogin["Address"].ToString(),
        //                    Age = rowLogin["Age"].ToString(),
        //                    Breed = rowLogin["Breed"].ToString(),
        //                    PetGender = rowLogin["PetGender"].ToString(),
        //                    PhoneNo = rowLogin["PhoneNo"].ToString(),
        //                    description = rowLogin["description"].ToString(),
        //                    health_status = rowLogin["health_status"].ToString()
        //                    // Add other properties as needed
        //                };

        //                // Combine login and additional data and return
        //                var responseData = new
        //                {
        //                    message = "User is valid",
        //                    userData,
        //                    additionalData = dtAdditional.AsEnumerable().Select(r => r.ItemArray).ToArray()
        //                };

        //                return Ok(responseData);
        //            }
        //            else
        //            {
        //                return Ok(new { message = "User is Invalid" });
        //            }
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        return BadRequest($"Error: {e.Message}");
        //    }
        //}


        [HttpPost]
        [Route("LoginAndFetchData")]
        public IHttpActionResult LoginAndFetchData(Models.Registration customer)
        {
            try
            {
                System.Diagnostics.Debug.WriteLine($"Received request: CustomerName={customer.CustomerName}, Password={customer.Password}");
                // Execute login query
                adapter = new SqlDataAdapter("Page_Login", conn);
                adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                adapter.SelectCommand.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
                adapter.SelectCommand.Parameters.AddWithValue("@Password", customer.Password);
                DataTable dtLogin = new DataTable();
                adapter.Fill(dtLogin);

                // Execute additional query
                if (dtLogin.Rows.Count > 0)
                {
                    DataRow rowLogin = dtLogin.Rows[0];

                    var userData = new Models.Registration
                    {
                        CustomerName = rowLogin["CustomerName"].ToString(),
                        Address = rowLogin["Address"].ToString(),
                        PetName = rowLogin["PetName"].ToString(),
                        Age = rowLogin["Age"].ToString(),
                        Breed = rowLogin["Breed"].ToString(),
                        PetGender = rowLogin["PetGender"].ToString(),
                        PhoneNo = rowLogin["PhoneNo"].ToString(),
                        description = rowLogin["description"].ToString(),
                        health_status = rowLogin["health_status"].ToString()
                        // Add other properties as needed
                    };

                    // Use PetGender and Breed for the additional query
                    var additionalQuery = "SELECT * FROM RegistrationPage WHERE PetGender <> @CurrentPetGender AND Breed = @CurrentBreed";

                    using (var additionalCommand = new SqlCommand(additionalQuery, conn))
                    {
                        additionalCommand.CommandType = CommandType.Text;
                        additionalCommand.Parameters.AddWithValue("@CurrentPetGender", userData.PetGender);
                        additionalCommand.Parameters.AddWithValue("@CurrentBreed", userData.Breed);

                        DataTable dtAdditional = new DataTable();
                        using (var additionalAdapter = new SqlDataAdapter(additionalCommand))
                        {
                            additionalAdapter.Fill(dtAdditional);
                        }

                        if (dtAdditional.Rows.Count > 0) // Check dtAdditional.Rows.Count instead of dtLogin.Rows.Count
                        {
                            // Additional data is present
                            var responseData = new
                            {
                                message = "User is valid",
                                userData,
                                additionalData = dtAdditional.AsEnumerable().Select(r => r.ItemArray).ToArray()
                            };

                            return Ok(responseData);
                        }
                        else
                        {
                            return Ok(new { message = "User is Invalid" });
                        }
                    }
                }
                else
                {
                    return Ok(new { message = "User is Invalid" });
                }
            }
            catch (SqlException ex)
            {
                for (int i = 0; i < ex.Errors.Count; i++)
                {
                    Debug.WriteLine($"Index #{i} Error: {ex.Errors[i].Number} - {ex.Errors[i].Message}");
                }

                // Handle the exception or rethrow it as needed
                return BadRequest($"SQL Error: {ex.Message}");
            }
        }
    }
}




/*

[HttpPost]
[Route("GetMatchedProfiles")]
public IHttpActionResult GetMatchedProfiles(Models.Registration currentUser)
{
    try
    {
        Console.WriteLine("Received PetGender: " + currentUser.PetGender);
        Console.WriteLine("Received Breed: " + currentUser.Breed);

        var matchedProfiles = GetMatchingProfiles(currentUser);

        Console.WriteLine($"PetGender: {currentUser.PetGender}, Breed: {currentUser.Breed}");
        return Ok(matchedProfiles);
    }
    catch (Exception e)
    {

        Console.WriteLine($"PetGender: {currentUser.PetGender}, Breed: {currentUser.Breed}");
        return BadRequest(e.Message);
    }
}



private List<Registration> GetMatchingProfiles(Registration currentUser)
{
    Console.WriteLine($"Current Pet Gender: {currentUser.PetGender}");
    Console.WriteLine($"Current Breed: {currentUser.Breed}");
    var query = "SELECT * FROM RegistrationPage WHERE PetGender <> @CurrentPetGender AND Breed = @CurrentBreed AND health_status = 'Yes'";

    using (var command = new SqlCommand(query, conn))
    {
        command.CommandTimeout = 120;
        command.Parameters.AddWithValue("@CurrentPetGender", currentUser.PetGender);
        command.Parameters.AddWithValue("@CurrentBreed", currentUser.Breed);

        Console.WriteLine($"PetGender: {currentUser.PetGender}, Breed: {currentUser.Breed}");
        var profiles = new List<Registration>();

        using (var reader = command.ExecuteReader())
        {
            while (reader.Read())
            {
                var profile = new Registration
                {
                    CustomerName = reader["CustomerName"].ToString(),
                    PhoneNo = reader["PhoneNo"].ToString(),
                    Address = reader["Address"].ToString(),
                    PetName = reader["PetName"].ToString(),
                    PetGender = reader["PetGender"].ToString(),
                    Breed = reader["Breed"].ToString(),
                    Age = reader["Age"].ToString(),
                    health_status = reader["health_status"].ToString(),
                    description = reader["description"].ToString(),

                };

                profiles.Add(profile);
            }
        }

        return profiles;
    }
}
*/







