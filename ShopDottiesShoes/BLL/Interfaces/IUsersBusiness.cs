using Model;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IUsersBusiness
    {
        Task<List<NguoiDung>> GetAllNguoiDung();
        bool Create(NguoiDung model);
    }
}
