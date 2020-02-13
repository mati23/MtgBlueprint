using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MTG.Data;
using MTG.Models;
using Newtonsoft.Json.Linq;

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
        public async Task<ActionResult<Deck>> GetDeckById([FromForm] Deck deck)
        {
            return await _context.Decks.FindAsync(deck.Id);
        }
        [HttpPost]
        [Route("CreateNewDeck")]
        public async Task<ActionResult> CreateNewDeck([FromForm] Deck deck)
        {
            if (!DeckExists(deck.Id))
            {
                JObject jsonDeck = JObject.Parse(deck.Cards);
                _context.Decks.Add(deck);
            }            
            try
            {
                await _context.SaveChangesAsync();
            }catch(DbUpdateException ex)
            {
                throw;
            }
            return NoContent();
        }
        private bool DeckExists(int id)
        {
            return _context.Decks.Any(e => e.Id == id);
        }

    }
    
}