using Microsoft.AspNetCore.Mvc;

namespace ProjetoTCC.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
