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
            await SeedRoles(roleManager);
            await SeedUsers(userManager);
        }

        private static async Task SeedUsers(UserManager<ApplicationUser> userManager)
        {
            if (userManager.FindByNameAsync("teste@ips.pt").Result == null)
            {
                ApplicationUser user = new() { UserName = "teste@ips.pt", Email = "teste@ips.pt", EmailConfirmed = true};
                IdentityResult result = await userManager.CreateAsync(user, "123456");
                System.Console.WriteLine($"Creating user: {user.UserName} - Succeeded: {result.Succeeded}");

                if (result.Succeeded)
                {
                    await userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, "User"));
                    //IdentityResult roleResult = await userManager.AddToRoleAsync(user, "User");
                    //System.Console.WriteLine($"Adding role User to user {user.UserName} - Succeeded: {roleResult.Succeeded}");
                }
            }

            if (userManager.FindByNameAsync("admin@ips.pt").Result == null)
            {
                ApplicationUser user = new() { UserName = "admin@ips.pt", Email = "admin@ips.pt", EmailConfirmed = true };
                IdentityResult result = await userManager.CreateAsync(user, "123456");
                System.Console.WriteLine($"Creating user: {user.UserName} - Succeeded: {result.Succeeded}");

                if (result.Succeeded)
                {
                    await userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, "Admin"));
                    //IdentityResult roleResult = await userManager.AddToRoleAsync(user, "Admin");
                    //System.Console.WriteLine($"Adding role Admin to user {user.UserName} - Succeeded: {roleResult.Succeeded}");
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
