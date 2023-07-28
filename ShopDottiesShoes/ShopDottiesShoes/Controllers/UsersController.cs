using BLL;
using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.ViewModels.Order;

namespace ShopDottiesShoes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersBusiness _nguoidungBusiness;
        public UsersController(IUsersBusiness nhanvienBusiness)
        {
            _nguoidungBusiness = nhanvienBusiness;
        }
        [Route("GetAll_nguoidung")]
        [HttpGet]
        public async Task<List<NguoiDung>> GetAllNguoiDung()
        {
            return await _nguoidungBusiness.GetAllNguoiDung();
        }
        [Route("create_nguoidung")]
        [HttpPost]
        public NguoiDung Create([FromBody] NguoiDung model)
        {
            _nguoidungBusiness.Create(model);
            return model;
        }
    }
}
