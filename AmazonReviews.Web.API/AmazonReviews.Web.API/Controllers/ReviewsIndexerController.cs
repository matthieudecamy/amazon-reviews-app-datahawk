using Microsoft.AspNetCore.Mvc;
using System;

namespace AmazonReviews.Web.API.Controllers
{
  [Route("api/reviews")]
  [ApiController]
  public class ReviewsIndexerController : Controller
  {
    public ReviewsIndexerController()
    {}

    [HttpPost("index")]
    public ActionResult Index([FromBody] string[] ASINs)
    {
      Console.WriteLine("Requested indexing of: " + string.Concat(ASINs, ", "));
      //TODO: actually launch indexing
      return Ok(ASINs);
    }
  }
}
