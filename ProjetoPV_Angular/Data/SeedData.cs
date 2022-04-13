using Microsoft.AspNetCore.Identity;
using ProjetoPV_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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
                IdentityResult result = await userManager.CreateAsync(user, "Teste1234!");
                System.Console.WriteLine($"Creating user: {user.UserName} - Succeeded: {result.Succeeded}");

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "ApplicationUser");
                    System.Console.WriteLine($"Adding role ApplicationUser to user {user.UserName} - Succeeded: {result.Succeeded}");
                }
            }

            if (userManager.FindByNameAsync("admin@ips.pt").Result == null)
            {
                ApplicationUser user = new() { UserName = "admin@ips.pt", Email = "admin@ips.pt", EmailConfirmed = true };
                IdentityResult result = await userManager.CreateAsync(user, "Teste1234!");
                System.Console.WriteLine($"Creating user: {user.UserName} - Succeeded: {result.Succeeded}");

                if (result.Succeeded)
                {
                    IdentityResult roleResult = await userManager.AddToRoleAsync(user, "Administrador");
                    System.Console.WriteLine($"Adding role Administrador to user {user.UserName} - Succeeded: {result.Succeeded}");
                }
            }
        }

        private static async Task SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            if (!roleManager.RoleExistsAsync("ApplicationUser").Result)
            {
                IdentityRole role = new() { Name = "ApplicationUser" };
                IdentityResult roleResult = await roleManager.CreateAsync(role);
                System.Console.WriteLine($"Creating role: {role.Name} - Succeeded: {roleResult.Succeeded}");
            }

            if (!roleManager.RoleExistsAsync("Administrador").Result)
            {
                IdentityRole role = new() { Name = "Administrador" };
                IdentityResult roleResult = await roleManager.CreateAsync(role);
                System.Console.WriteLine($"Creating role: {role.Name} - Succeeded: {roleResult.Succeeded}");
            }
        }

    }
}
