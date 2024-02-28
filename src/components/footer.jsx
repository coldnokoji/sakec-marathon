import React from "react";
import './footer.css';
import logo from '../assets/img/logo.png';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer-body">

        <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <img src={logo} alt="logo" className="Logo"/>
        </div>
        <div class="media-icons">
          <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATtJREFUSEvt1LFKxEAQBuB/kHQWKWwOi52kEcFG8gIKvoCtjTanD2HvG3ioCNr5BnaiPkAKCwWrnaQQPQKCluKuWijh4Eg23G08yLa7zLfzMwyhpUMtuZhZeC6O41VjzLwx5j0IgmEYhs9pmn5UJdm4Y6XUJhEdAuiNIPcisjIVmJl3AJyNKT4dOEmSoCiKJyJa8Aoz8xqA6xH0EcAlgDdr7TDLssHEo2bmbQDnpcIvIrII4LMKK987Dxcz734P1HGpyK2I/KTgdJrAewCOSsqNiKw7qYD7AmFmfzAzPwBYrtnVhYhsVb2tFbULTEQHWuv9NuC+1vrUO2yM2cjz/GoicLlIFEV9a+2J96nuYAB+FkgXdRd11eL4va+1q//FAlFK9Yho6e/nRK9a67u6nTbu2BUY99456pmHvwAVcKsfvQ1ZOAAAAABJRU5ErkJggg=="/></a>
          <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAqtJREFUSEvtlj1oVEEQx/9zdwF5SPwClfji7V4iIogp1CZ+cEYUCViIIhYBg2AhRBEiWIgWFgqCiIpia6Pxi1QiNhK1ENFGhDSa3K7EiJAmCDF6j/f3Fi7hLt7duw8xTRaWV+zM/GZm582sYJ6WzBMXC+D/lvmGU51KpZaEYXgbQCeAVgDTJK9ls9nL4+PjUy4SrfUq981kMt9nIisCt7S0eE1NTXe01seGhoaCqPB931+TSCReO9slZL+SvC8iGwE0G2O2FcoUgZPJ5MGc4GMAg0qpw1FwpdRTAN0RDn4Kw3BfLBZrNca8LBmx1vokyRv5w7fxeLxnZGTkcynDqVRqSxiG76KyAsACWE3ygLX2WTnwTpKzXgH4BeBCEAQ3x8bGfhZClFKnAFyPApOcEJEeY8zzsqlWSi0i+UNEEnMMTpF8IiL3cp5/sNZ+01qfJ3kxCgzgijHm7Fy5v6paKXUCgKvSSmsSgNtro8Akz1lrL1UEK6V6AWzKFVcHgK4oo1We9xpj7lYEa633kiy6iyqNlxUj2WmtfVMRnE6nE8YYV8XJRoF5/UljzDIAjLxjrfUOkoMAVvwD+ANjzJFSdkq2zHxH6id5XEQWN+BAurBplP2dZg601n0kD5HcXC+Y5Htr7dZyTpeMOJlMbhCRjwDi9UZLcre19kVNYCestd5PciDXALxa4SJyNZPJnKmkV3EstrW1rQyCoA/ALhHZXqUDrzzP2zM8PPy7bnB7e3tzEAT9AE670VYFeMDzvKNRUGdnNmLf95fH4/EON74ArHebpOte7j+MWpP51ngrSnDmvCjVWmtXya6vrqvSQFZEHgLoL3xdVKNbrqq7YrFYN0n3svBJpgAsFZGJ/Jj7IiKDIvJodHTUDYuaV8NvrpqJeYUFcL2Zq1lv3lL9BwdgAC7ciKmDAAAAAElFTkSuQmCC"/></a>
          <a href="https://www.instagram.com/sakec.marathon/?hl=en" target="blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABDNJREFUSEvNVk1oXFUU/s6dOIWqoKAY03TefZMYUajRtG4aUoO6ayRSBAWxaqEu3DWKQlExFlHQYjeCCzVaQejCH2rrRqFYA4ppU5GKJSRzz41pRChUqnYxzNzjO2GmvMy8ySRu0rsZ5t17z3fOd8/5ziGs06J1wsXVDRxF0a3GmF4Rya3EEBFVQwiz3vs/2jHZMmJrbaeIvEVEOwHc2M5Qw/5FETkO4IVWTmQCR1G0k4iOALi2ZvBfETmjEbVxIA9gAMAGPSci/wB41Hv/deO9JuCurq6N+Xx+DkAngAkies85dxpAO9Al28PDwx3OuSEiGgcwBGCxXC7ftri4eDkN3gRsrdULrwA4wsyPrZFixHH8BAByzh221p5QX5L/48z8ajvgBQCbkkg7nXN/rgVYQUXkcO3O00R0RkR+BnCembtbAmtCAdCMPMfMd2SBdnd3b8rlcqPGmO0hBAHwA4AvNIniON4tIh/X7u1h5okoiv4mouvy+fzNMzMzF+o2l1EdRdEAEZ0WkUnvvb7PsmWtfQbA2wCub9i6JCL7vPcfWmufUqqNMWdLpdKUtVbzpZjL5bbMzc2dzQSO43hIRE4S0XHn3EjaeOL5c4nnCnoJwCEA00R0TQjhLgD7NCr9ZWbdu7Kstb8A2CIi2733ys7SWhZxsVh8MITwjVLHzLvqh6Iouiep5ykAFyqVytaFhYXzaePFYrEQQphWJkIIA/Pz87/W9621+sb9xpihUqk0uSIwEX3mnHskBfxaUsMvJ9GOMfM7WW9vrX0RwJsi8pL3/vUUsDqkju9wzn2fCVwoFB4wxnybEfFXRDQiIiPee1WkphVF0S51uNFpa61qgIrKMDN/lwlsrdWaOyEix7z3D6W8/hLAaFIeo865o2sBTlRwioi2Jblzv/de67r5jevAiYdHmXk0BayCMp5I4PPe+4MtgPcnyaYU72fmN1J3TwHYSkT3OedOrininp6ezdVq9ZyIXK5Wq3c3Jlccx5FqOYAOEbk93RhWlVyFQmHQGDPZopyeJaJ3a8J/KHnzU0SkTaFfaxjARiLa65x7v6GcNMPvNMbcWyqVNPpmqmtlM91KQOI43isiSnWWgIx57z9ofIa6gBBRv3NOa7oZuLe3t7tSqfwOwDOzzXrLmmQ+TESDIqId60cAn7fou8Zaq11pQ0dHx+bZ2VntA83AAHJRFP2lKiQiXauZJLKcq38rFovbQghT+jze+xvSrTWrLSpdewB8ysyPr2S43Z61VrNYNX+CmdXmldUE3NfXd1O5XJ6pjTs6ORxg5p+SHh3aAel+fRAwxhwQkUEAF/P5fF+6M+m5zNHHWvskgI9SQP9r9FkCINrtnPuk0emWw14cxztEZAyAKphZTbSpM8rOMSI6mBaNFaluBIjj+BYRyRwKWjlDRL+1m16u7oF+jTSv6vi6Rfwf1Y3wLooxKTEAAAAASUVORK5CYII="/></a>
          <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAf1JREFUSEvtlrFrFEEUxt+bm0IECwUbOe9mPNJYKqhFDBqwsrQTAoJFRBEsFAURxUJECy3E+AcIdrGxERVD0gkGOwv3dmaWi82BCuYgFruftxCPuYk5RGeJkLxu3uy+33yP780u0wYFbxCX/i+wUuoMM+8uiuKNc26xiq6sUay1XgAw/gvGzFPGmKex4UNgpdQ0ET0JIB+ttfurBt/sA275EADLzrkdlYK11kcBzAeQZ9ba05WCy+JKqXNEdI2I9hDR816vd7bb7S5XDo4NWK9e1Dmu1+u7pJRjUsqlJEk6o0QMgZvNpmbm1H+BmR8bYy6UOa31ZQD3g4I7mXkCQGnMA97edwAv8zyf7nQ6X8JDxABfIqKH66kDkAA4lGXZ1yFB/uIvFa8Q0bZRbQVw3Tl3Jza4rFcQUZuIPhPRBNGab8CitfZgbPBKURTjWZa9Xx3HYwBeMbP0QIWUcnuSJD8GV/G/thrAI+fcRb+O1voFgJN+rlarjbXb7SQm+JRzbtaHKKUeEFFpukEw82FjzLtoYCHEiTRNXweKbwC4HRjuuLV27rfgRqOxTwhRmsSPGWvt+dU5vgLgnr/Zv9snnXNvA8VX+06/uwXeavXAA5vPXEqp8rI/4o+BEGIpTdNPZa7Vau3N87wVjMkHa+03P/cnz0X9EQgONHK5+cA/AV0Qhi4a1BUdAAAAAElFTkSuQmCC"/></a>
          <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABDFJREFUSEvFV1toHFUY/v6zswmZekdNDWbnzLpCjFLFC20KQrygvgTUBxWESkEULxQsgvoQlGK1eEFKvaAvKhZEoShqvaEvXiNtH4Kw0pDOObMpqwFFRLMNu7Pnd4/MhtnJ7mZSHzpPy5nv/74z//n+//xLOEUPnSJdrFc4VygUthCRFEJcYDdtjKkyc1ipVGYANLN+SCbhYrF4sTHmCQC3ATirB/mfzHyAmZ+tVCrBWhvoKzwyMuLm8/k9RPQggNxaZPY9M0dE9ILruk+Wy+V6r5iewr7ve8x8EMClWQS7YA41m81bFxYWqt3iuwp7nncJEX0H4JyTFG2HVYloq1IqTPOsEpZSbgRgjeJlEJ1l5m+I6DIA4wA+BWBFnkrEloUQW4Mg+CvJ1034PQB3ZBAFEd0HYMwYc8wY82E7rVLKz1qbv6XNQUSvKKUe7ins+/4mZp7NIhpjJpj5WyJybGU1Go3zmfnEwMCA9cZkgqfuOM5F8/Pzx1c2kxSRUr4NYFtG4WUA1wH4MSP+Oa31Y6uEx8fHB2q12u8ATs9I9AOA/QBezYjXWmt/lbDnedcT0df9SJj5n5ZLvwRwmJm/AHCCiKZaZXeNPdNW/Z7WL56IxpRSRy1mxVxSynsAvNVhAKLduVxubxRFj7SMVK3Vam8uLi4udSMfHh7e4Lrudma+iogOMvMOANcmsUKIqSAIPukQ9n3/UWZ+PgGc1VpfkTGNq2ClUmkwiqIygGLC3TuUUvs6hD3P20lELyYYjmqtx1LmOwxgIxHd0E5ZoVAoCiFs3Qda6y0p/BEAVybWdmqtX0qn+i4A76ZSPa2UetquxRfFnP3NzLeHYfiB/e37/k3xeaNer2+oVqs1uy6ltDX+eorvTqXU+2nhzXHHSmJntNYT7QXf97cx89la673tNVsNS0tL9wohjiulPmqvSyk/b5XazUkyY8zVlUrFZqHjPs55nvcbEZ3bBlsXNxqN4fZXZD3v+Hzt5ZDs9VWt9YU2YWlhmx6bGpui5LNS+MVi8UxjzDvM/Fo+n/8+l8vx8vKyde4Dg4OD2+fm5mwfgOd5u4hoOknCzPvCMLRO/+/p6NVSSmsm68SOdev2MAztINAcHR0dcRznIQCXM7PFzTabzZfjPp2TUlpPPJ7afEMIUQqCoNJVODbLfma+u0taZ4QQ00EQfNXlHfm+fyMz7wLQ4ewY+4bW+v4Oo6VJSqXSeVEU/WQN2+NM/wbwM4BG/D7PzJv6dK1fhBATa16LliwuHVub/3sQcBxnc/JW6pnqRDnIVvv7OL7ksxo6iTvCzFNhGP7aLbjvsGf779DQkDWLdaPIqG4HvD2u6+4+qWEvKRK73TrVjrdn9NjAHwAOENEz3WasdEymubodNDk56YRhOGGMKSQHeiI6prU+ZKeQjFlZ9z+JrLxr4tb1xWuyrQPwL9L0rS62Cs7aAAAAAElFTkSuQmCC"/></a>
        </div>
      </div>
      
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2024 <a href="#">Sakec-Marathon</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
        </div>
    );
}

export default Footer;