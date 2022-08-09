package fr.fms.web;


import fr.fms.business.IBusinessImpl;
import fr.fms.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private IBusinessImpl iBusiness;

    // test login provisoire pour creer user dans localstorage
    @GetMapping("/login/{mail}")
    public Users userLogin(@PathVariable("mail") String mail) throws Exception {
        return iBusiness.getUserByMail(mail);
    }


}
