using Microsoft.AspNetCore.Mvc;

namespace TravelAPI.Controllers
{
    /// <summary>
    /// Controller responsible for handling website-related actions.
    /// </summary>
    public class WebsiteController: Controller
    {
        /// <summary>
        /// Returns the index HTML file of the website.
        /// </summary>
        /// <returns>The index HTML file as an IActionResult.</returns>
        public IActionResult Index(){
            return PhysicalFile(System.IO.Path.Combine(Directory.GetCurrentDirectory(),
                "wwwroot", "index.html"), "text/HTML");
        }
    }
}
