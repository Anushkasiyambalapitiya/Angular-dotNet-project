using fullstack.api.Data;
using fullstack.api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fullstack.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {

        private readonly FullstackDBContext _fullstackDBContext;

        public EmployeesController(FullstackDBContext fullstackDBContext)
        {
            _fullstackDBContext = fullstackDBContext;


        }


        [HttpGet]
        public async Task<IActionResult> getAllEmployees()
        {
            var employees = await _fullstackDBContext.Employees.ToListAsync();
            return Ok(employees);

        }

        [HttpPost]
        public async Task<IActionResult> addNewEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _fullstackDBContext.Employees.AddAsync(employeeRequest);
            await _fullstackDBContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            try
            {
                var employee = await _fullstackDBContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

                if (employee == null)
                {
                    return NotFound();
                }

                return Ok(employee);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployeeRequest)
        {
            var employee = await _fullstackDBContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            employee.Name = updateEmployeeRequest.Name;
            employee.Email = updateEmployeeRequest.Email;
            employee.Phone = updateEmployeeRequest.Phone;
            employee.Salary = updateEmployeeRequest.Salary;
            employee.Department = updateEmployeeRequest.Department;

            await _fullstackDBContext.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullstackDBContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _fullstackDBContext.Employees.Remove(employee);
            await _fullstackDBContext.SaveChangesAsync();
            return Ok(employee);
        }
    }
}