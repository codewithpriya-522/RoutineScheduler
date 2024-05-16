using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseAPIController : ControllerBase
{
    protected readonly IUnitOfWork _unit;
    protected readonly IMapper _mapper;

    public BaseAPIController(IUnitOfWork unit, IMapper mapper)
    {
        _unit = unit;
        _mapper = mapper;
    }
}
