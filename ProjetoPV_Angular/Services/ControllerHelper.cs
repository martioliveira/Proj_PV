using Microsoft.AspNetCore.Identity;
using ProjetoPV_Angular.Models;
using System.Security.Claims;

namespace ProjetoPV_Angular.Services
{
    public static class ControllerHelper
    {

        public static string Id(ClaimsPrincipal user)
        {
            var userClaim = user.FindFirst(ClaimTypes.NameIdentifier);
            if (userClaim == null) return null;
            return userClaim.Value;
        }

        public static bool IsAdmin(ClaimsPrincipal user)
        {
            var userClaim = user.FindFirst(ClaimTypes.Role);
            if (userClaim == null) return false;

            var userRole = userClaim.Value;
            return userRole == "Admin";
        }

        public static bool IsUser(ClaimsPrincipal user)
        {
            var userClaim = user.FindFirst(ClaimTypes.Role);
            if (userClaim == null) return false;

            var userRole = userClaim.Value;
            return userRole == "User";
        }
    }
}
