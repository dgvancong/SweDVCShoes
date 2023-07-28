using Model;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IUsersRepository
    {
        Task<List<NguoiDung>> GetAllNguoiDung();
        bool Create(NguoiDung model);
    }
}
