using Microsoft.AspNetCore.Identity;
using ProjetoPV_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ProjetoPV_Angular.Data
{
    public static class SeedData
    {
        public static async Task Seed(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //await SeedRoles(roleManager);
            await SeedUsers(userManager);
        }

        private static async Task SeedUsers(UserManager<ApplicationUser> userManager)
        {
            await CreateUserAsync(userManager, "teste@ips.pt", "123456", "User");
            await CreateUserAsync(userManager, "teste2@ips.pt", "123456", "User");
            await CreateUserAsync(userManager, "admin@ips.pt", "123456", "Admin");
        }

        private static async Task CreateUserAsync(UserManager<ApplicationUser> userManager, string email, string password, string role)
        {
            if (userManager.FindByNameAsync(email).Result == null)
            {
                ApplicationUser user = new() { UserName = email, Email = email, EmailConfirmed = true };
                IdentityResult result = await userManager.CreateAsync(user, password);
                System.Console.WriteLine($"Creating user: {user.UserName} - Succeeded: {result.Succeeded}");

                if (result.Succeeded)
                {
                    IdentityResult claimResult = await userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, role));
                    System.Console.WriteLine($"Adding role to user: {user.UserName} - Succeeded: {claimResult.Succeeded}");
                }
            }
        }

        private static async Task SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            if (!roleManager.RoleExistsAsync("User").Result)
            {
                IdentityRole role = new() { Name = "User" };
                IdentityResult roleResult = await roleManager.CreateAsync(role);
                System.Console.WriteLine($"Creating role: {role.Name} - Succeeded: {roleResult.Succeeded}");
            }

            if (!roleManager.RoleExistsAsync("Admin").Result)
            {
                IdentityRole role = new() { Name = "Admin" };
                IdentityResult roleResult = await roleManager.CreateAsync(role);
                System.Console.WriteLine($"Creating role: {role.Name} - Succeeded: {roleResult.Succeeded}");
            }
        }

    }
}
