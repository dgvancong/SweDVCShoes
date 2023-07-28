using BLL.Interfaces;
using DAL.Interfaces;
using Model;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BLL
{
    public partial class UsersBusiness :IUsersBusiness
    {
        private readonly IUsersRepository _res;
        public UsersBusiness(IUsersRepository res)
        {
            _res = res;
        }
        public async Task<List<NguoiDung>> GetAllNguoiDung()
        {
            return await _res.GetAllNguoiDung();
        }

        public bool Create(NguoiDung model)
        {
            return _res.Create(model);
        }

        
    }
}
