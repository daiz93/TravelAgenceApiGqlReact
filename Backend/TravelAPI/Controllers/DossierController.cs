 
using Infrastructure.Services;
using Infrastructure.DTOs;
using Microsoft.AspNetCore.Mvc;
 

namespace TravelAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DossierController : ControllerBase
    {
        private readonly IDossierService _dossierService;

        public DossierController(IDossierService dossierService)
        {
            _dossierService = dossierService ?? throw new ArgumentNullException(nameof(dossierService));
        }

        /// <summary>
        /// Récupère tous les dossiers de voyage.
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<List<DossierDTO>>> GetDossiers()
        {
            var dossiers = await _dossierService.GetDossiers();
            return Ok(dossiers);
        }


        /// <summary>
        /// Récupère tous les dossiers d'un client à partir de l'ID.
        /// </summary>
        [HttpGet("client/{clientId}")]
        public async Task<ActionResult<DossierDTO>> GetDossierByClientId(int clientId)
        {
            var dossier =( await _dossierService.GetDossiers()).FirstOrDefault(x => x.ClientId == clientId); ;//.Result.Where(c => c.ClientId == clientId);
 
            return Ok(dossier);
        }

        /// <summary>
        /// Récupère un dossier de voyage spécifique par ID.
        /// </summary>
        /// <param name="id">Identifiant du dossier</param>
        [HttpGet("{id}")]
        public async Task<ActionResult<DossierDTO>> GetDossier(int id)
        {
            var dossier = await _dossierService.GetDossier(id);
            if (dossier == null)
            {
                return NotFound();
            }

            return Ok(dossier);
        }

        /// <summary>
        /// Ajoute un nouveau dossier de voyage.
        /// </summary>
        /// <param name="dossier">Détails du nouveau dossier</param>
        [HttpPost]
        public async Task<ActionResult<DossierDTO>> AddDossier(NewDossierDTO dossier)
        {
            try
            {
                var addedDossier = await _dossierService.AddDossier(dossier);
                return Ok(addedDossier); // CreatedAtAction(nameof(GetDossier), new { id = addedDossier==null ? addedDossier.DossierId : 0}, addedDossier);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Met à jour les détails d'un dossier de voyage existant.
        /// </summary>
        /// <param name="id">Identifiant du dossier</param>
        /// <param name="dossier">Détails du dossier mis à jour</param>
        [HttpPut("{id}")]
        public async Task<ActionResult<DossierDTO>> UpdateDossier(int id, DossierDTO dossier)
        {
            if (id != dossier.DossierId)
            {
                return BadRequest();
            }

            try
            {
                var updatedDossier = await _dossierService.UpdateDossier(dossier);
                if (updatedDossier == null)
                {
                    return NotFound();
                }

                return updatedDossier;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Supprime un dossier de voyage existant.
        /// </summary>
        /// <param name="id">Identifiant du dossier</param>
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<DossierDTO>>> DeleteDossier(int id)
        {
            try
            {
                var deletedDossiers = await _dossierService.DeleteDossier(id);
                return Ok(deletedDossiers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
