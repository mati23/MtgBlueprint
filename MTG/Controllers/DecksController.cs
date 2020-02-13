using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MTG.Data;
using MTG.Models;

namespace MTG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DecksController : ControllerBase
    {
        private readonly DataContext _context;

        public DecksController(DataContext dataContext)
        {
            _context = dataContext;
        }
        //GET: api/Decks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Deck>>> GetDecks()
        {
            return await _context.Decks.ToListAsync();
        }
        //POST: api/Decks;GetCardById
        [HttpPost]
        public async Task <ActionResult<Deck>> GetCardById(string id)
        {
            return await _context.Decks.FindAsync(id);
        }
        //POST: api/Decks;GetCardById
        [HttpPost]
        [Route("GetDeckById")]
        public async Task<ActionResult<Deck>> GetDeckById([FromBody] string id)
        {
            return await _context.Decks.FindAsync(id);
        }
    }
}