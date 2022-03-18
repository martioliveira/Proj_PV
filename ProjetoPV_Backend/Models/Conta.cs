﻿using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class Conta
    {
        [Key]
        public long ContaId { get; set; }

        [Display(Name = "Descrição da Conta")]
        public string Descricao { get; set; }

        [Required, Range(0.0, double.MaxValue)]
        public double Saldo { get; set; }

        [Required]
        public string Moeda { get; set; }

        [Required]
        public TipoConta TipoContaId { get; set; }

    }
}
