using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Boogie.Api.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Nazwa jest wymagana.")]
        [StringLength(100, ErrorMessage = "Nazwa nie moze być dłuzsza niz 100 znaków.")]
        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}