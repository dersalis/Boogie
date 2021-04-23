using System;
using System.Collections.Generic;
using System.Linq;
using Boogie.Api.Data;
using Boogie.Api.Models;
using Boogie.Api.ViewModels;
using Mapster;

namespace Boogie.Api.Servises
{
    public interface ICategoryService
    {

    }

    public class CategoryService
    {
        private readonly BoogieContext _context;

        /// <summary>
        /// Serwis kategorie
        /// </summary>
        /// <param name="boggieContext">Kontekst</param>
        public CategoryService(BoogieContext boggieContext)
        {
            _context = boggieContext;
        }


        /// <summary>
        /// Zwraca wszystkie kategorie
        /// </summary>
        /// <returns>Lista kategori</returns>
        public IEnumerable<CategoryForTable> GetAll()
        {
            var categoriesFromDB = _context.Categories.ToList();
            TypeAdapterConfig<Category, CategoryForTable>.NewConfig().Map(dest => dest.ProductsCount, src => src.Products.Count);
            var categories = categoriesFromDB.Adapt<List<CategoryForTable>>();

            return categories;
        }


        /// <summary>
        /// Dodaje kategorie
        /// </summary>
        /// <param name="name">Nazwa kategorii</param>
        /// <returns>Id nowej kategorii</returns>
        public int Add(string name)
        {
            if(string.IsNullOrEmpty(name)) throw new Exception("Nazwa jest wymagana");
            var newCategory = new Category() { Name = name };
            _context.Categories.Add(newCategory);
            var id = _context.SaveChanges();
            return id;
        }


        /// <summary>
        /// Aktualizuje kategorie
        /// </summary>
        /// <param name="id">Id kategorii</param>
        /// <param name="name">Nazwa</param>
        /// <returns>Id kategorii</returns>
        public int Update(int id, string name)
        {
            if(string.IsNullOrEmpty(name)) throw new Exception("Nazwa jest wymagana");

            var categoryFromDB = _context.Categories.Find(id);
            if (categoryFromDB == null) throw new Exception("Nie można odnaleźć kategorii.");

            categoryFromDB.Name = name;

            var uId = _context.SaveChanges();

            return uId;
        }


        /// <summary>
        /// Usuwa kategorie
        /// </summary>
        /// <param name="id">Id kategorii</param>
        /// <returns>Id kategorii</returns>
        public int Delete(int id)
        {
            var categoryFromDB = _context.Categories.Find(id);
            if (categoryFromDB == null) throw new Exception("Nie można odnaleźć kategorii.");

            _context.Categories.Remove(categoryFromDB);
            var uId = _context.SaveChanges();

            return uId;
        }
    }
}