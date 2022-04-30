using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjetoPV_Angular.Models;

namespace ProjetoPV_Angular.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Transacao>()
                    .HasOne(t => t.ContaOrigem)
                    .WithMany()
                    .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Transacao>()
                    .HasOne(t => t.ContaDestino)
                    .WithMany()
                    .OnDelete(DeleteBehavior.Restrict);

            //Popular Entidade TipoConta
            #region Dados TipoConta
            builder.Entity<TipoConta>().HasData(
                    new TipoConta
                    {
                        TipoContaId = 1,
                        Descricao = "Geral"
                    },
                    new TipoConta
                    {
                        TipoContaId = 2,
                        Descricao = "Conta Atual"
                    },
                    new TipoConta
                    {
                        TipoContaId = 3,
                        Descricao = "Cartão de Crédito"
                    },
                    new TipoConta
                    {
                        TipoContaId = 4,
                        Descricao = "Dinheiro"
                    },
                    new TipoConta
                    {
                        TipoContaId = 5,
                        Descricao = "Empréstimo"
                    },
                    new TipoConta
                    {
                        TipoContaId = 6,
                        Descricao = "Hipoteca"
                    },
                    new TipoConta
                    {
                        TipoContaId = 7,
                        Descricao = "Investimento"
                    },
                    new TipoConta
                    {
                        TipoContaId = 8,
                        Descricao = "Seguro"
                    },
                    new TipoConta
                    {
                        TipoContaId = 9,
                        Descricao = "Bónus"
                    },
                    new TipoConta
                    {
                        TipoContaId = 10,
                        Descricao = "Conta-Poupança"
                    }
                    );
            #endregion

            //Popular Entidade Conta
            #region Dados Conta
            builder.Entity<Conta>().HasData(
                new Conta
                {
                    ContaId = 1,
                    Descricao = "Conta 1",
                    Moeda = "EUR",
                    Saldo = 349,
                    TipoContaId = 1
                },
                new Conta
                {
                    ContaId = 2,
                    Descricao = "Conta 2",
                    Moeda = "EUR",
                    Saldo = 12,
                    TipoContaId = 2
                },
                new Conta
                {
                    ContaId = 3,
                    Descricao = "Conta 3",
                    Moeda = "EUR",
                    Saldo = 2199,
                    TipoContaId = 2
                }) ; 
            #endregion

            //Popular Entidade Categoria
            #region Dados Categoria
            builder.Entity<Categoria>().HasData(
                    new Categoria
                    {
                        CategoriaId = 1,
                        Nome = "Transportes",
                        Descricao = "Categoria destinada a gastos com transportes."
                    },
                    new Categoria
                    {
                        CategoriaId = 2,
                        Nome = "Comida e Bebida",
                        Descricao = "Categoria destinada a gastos com alimentação."
                    },
                    new Categoria
                    {
                        CategoriaId = 3,
                        Nome = "Supermercado",
                        Descricao = "Categoria destinada a gastos no supermercado."
                    },
                    new Categoria
                    {
                        CategoriaId = 4,
                        Nome = "Habitação",
                        Descricao = "Categoria destinada a gastos com a habitação."
                    },
                    new Categoria
                    {
                        CategoriaId = 5,
                        Nome = "Geral",
                        Descricao = "Gastos gerais."
                    },
                    new Categoria
                    {
                        CategoriaId = 6,
                        Nome = "Investimentos",
                        Descricao = "Investimentos."
                    },
                    new Categoria
                    {
                        CategoriaId = 7,
                        Nome = "Juros",
                        Descricao = "Juros."
                    },
                    new Categoria
                    {
                        CategoriaId = 8,
                        Nome = "Lazer",
                        Descricao = "Lazer."
                    }
                    );

            #endregion

            //Popular Entidade TipoTransacao
            #region Dados TipoTransacao
            builder.Entity<TipoTransacao>().HasData(
                    new TipoTransacao
                    {
                        TipoTransacaoId = 1,
                        Descricao = TipoTransacaoDescricao.Receita
                    },
                    new TipoTransacao
                    {
                        TipoTransacaoId = 2,
                        Descricao = TipoTransacaoDescricao.Despesa
                    },
                    new TipoTransacao
                    {
                        TipoTransacaoId = 3,
                        Descricao = TipoTransacaoDescricao.Transacao
                    }
                    );
            #endregion

            //Popular Entidade Transacao
            #region Dados Transacao
            builder.Entity<Transacao>().HasData(
                new Transacao
                {
                    TransacaoId = 1,
                    ContaOrigemId = 1,
                    ContaDestinoId = 2,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 1",
                    Moeda = "EUR",
                    Valor = 500,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 1,
                    CategoriaId = 1
                },
                new Transacao
                {
                    TransacaoId = 2,
                    ContaOrigemId = 2,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 2",
                    Moeda = "EUR",
                    Valor = 300,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2,
                    CategoriaId = 2
                },
                new Transacao
                {
                    TransacaoId = 3,
                    ContaOrigemId = 2,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 3",
                    Moeda = "EUR",
                    Valor = 900,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2,
                    CategoriaId = 3
                },
                new Transacao
                {
                    TransacaoId = 4,
                    ContaOrigemId = 2,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 4",
                    Moeda = "EUR",
                    Valor = 1500,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2,
                    CategoriaId = 4
                },
                new Transacao
                {
                    TransacaoId = 5,
                    ContaOrigemId = 3,
                    ContaDestinoId = 1,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 5",
                    Moeda = "EUR",
                    Valor = 321,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2,
                    CategoriaId = 5
                },
                new Transacao
                {
                    TransacaoId = 6,
                    ContaOrigemId = 3,
                    ContaDestinoId = 2,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 6",
                    Moeda = "EUR",
                    Valor = 117,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 3,
                    CategoriaId = 6
                },
                new Transacao
                {
                    TransacaoId = 7,
                    ContaOrigemId = 1,
                    ContaDestinoId = 3,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 7",
                    Moeda = "EUR",
                    Valor = 443,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2,
                    CategoriaId = 7
                },
                new Transacao
                {
                    TransacaoId = 8,
                    ContaOrigemId = 2,
                    ContaDestinoId = 3,
                    Beneficiario = 254385938,
                    Descricao = "Transacao 8",
                    Moeda = "EUR",
                    Valor = 1789,
                    TipoTransacaoId = 3,
                    Anexo = "",
                    DataCriacao = DateTime.Now,
                    DataTransacao = DateTime.Now,
                    ClienteId = 2,
                    CategoriaId = 8
                }
                );
            #endregion

            //Popular Entidade Orçamento
            #region Dados Orçamento
            builder.Entity<Orcamento>().HasData(
                    new Orcamento
                    {
                        OrcamentoId = 1,
                        DataFim = DateTime.Now.AddDays(12),
                        DataInicio = DateTime.Now.AddDays(-12),
                        Descricao = "Acabar mês com 2460€",
                        Moeda = "EUR",
                        Valor = 1000,
                    },
                    new Orcamento
                    {
                        OrcamentoId = 2,
                        DataFim = DateTime.Now.AddDays(43),
                        DataInicio = DateTime.Now.AddDays(-12),
                        Descricao = "Despesas Carro 50€",
                        Moeda = "EUR",
                        Valor = 2000,
                    },
                    new Orcamento
                    {
                        OrcamentoId = 3,
                        DataFim = DateTime.Now.AddDays(12),
                        DataInicio = DateTime.Now.AddDays(-12),
                        Descricao = "Poupar para férias 350€",
                        Moeda = "EUR",
                        Valor = 3000,
                    });
            #endregion

            //Popular Entidade Orçamento Contas
            #region Dados Orçamento Contas
            builder.Entity<OrcamentoContas>().HasData(
                    new OrcamentoContas
                    {
                        OrcamentoContasId = 1,
                        OrcamentoId = 1,
                        ContaId = 1,
                    },
                    
                    new OrcamentoContas
                    {
                        OrcamentoContasId = 2,
                        OrcamentoId = 2,
                        ContaId = 1,
                    },
                    
                    new OrcamentoContas
                    {
                        OrcamentoContasId = 3,
                        OrcamentoId = 3,
                        ContaId = 2,
                    });
            #endregion

            //Popular Entidade Objetivo
            #region Dados Objetivo
            builder.Entity<Objetivo>().HasData(
                    new Objetivo
                    {
                        ObjetivoId = 1,
                        DataFim = DateTime.Now.AddDays(12),
                        DataInicio = DateTime.Now.AddDays(-12),
                        Descricao = "Férias - 500€ e pouco",
                        Moeda = "EUR",
                        ValorAtingir = 520,
                        ValorAcumulado = 10,
                    },
                    new Objetivo
                    {
                        ObjetivoId = 2,
                        DataFim = DateTime.Now.AddDays(15),
                        DataInicio = DateTime.Now.AddDays(-15),
                        Descricao = "Operação de 700 euros",
                        Moeda = "EUR",
                        ValorAtingir = 700,
                        ValorAcumulado = 35,
                    },
                    new Objetivo
                    {
                        ObjetivoId = 3,
                        DataFim = DateTime.Now.AddDays(4),
                        DataInicio = DateTime.Now.AddDays(-4),
                        Descricao = "Carro ou mota",
                        Moeda = "EUR",
                        ValorAtingir = 3000,
                        ValorAcumulado = 1510,
                    });
            #endregion
        }

        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<TipoConta> TipoConta { get; set; }
        public DbSet<TipoTransacao> TipoTransacao { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Conta> Conta { get; set; }
        public DbSet<ProjetoPV_Angular.Models.ContaClientes> ContaClientes { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Objetivo> Objetivo { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Orcamento> Orcamento { get; set; }
        public DbSet<ProjetoPV_Angular.Models.OrcamentoContas> OrcamentoContas { get; set; }
        public DbSet<ProjetoPV_Angular.Models.Transacao> Transacao { get; set; }
    }
}