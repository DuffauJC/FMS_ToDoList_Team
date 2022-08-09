package fr.fms.web;


import fr.fms.business.IBusinessImpl;
import fr.fms.entities.Category;
import fr.fms.entities.Role;
import fr.fms.entities.Tasks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class RestTasksController {

    @Autowired
    private IBusinessImpl iBusiness;

    @GetMapping("/readTasks")
    public List<Tasks> allUserTasks(){
        return iBusiness.getTasks();
    }

    @GetMapping("/categorie")
    public List<Category> allCategories(){
        return iBusiness.getCategory();
    }

    @PostMapping("/saveTask")
    public void saveTask(@RequestBody Tasks tasks) throws Exception {
        iBusiness.saveOrUpdateTask(tasks);
    }
}
