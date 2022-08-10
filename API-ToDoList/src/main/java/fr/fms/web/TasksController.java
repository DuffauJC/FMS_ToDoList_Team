package fr.fms.web;


import fr.fms.business.IBusinessImpl;
import fr.fms.entities.Category;
import fr.fms.entities.Tasks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/task")
public class TasksController {

    @Autowired
    private IBusinessImpl iBusiness;

    @GetMapping("/all")
    public List<Tasks> allUserTasks(){
        return iBusiness.getTasks();
    }

    @GetMapping("/{id}")
    public Tasks getUserTask(@PathVariable("id") long id) throws Exception {
        Optional<Tasks> tasks = iBusiness.readTasksById(id);
        if (tasks.isPresent()) {
            return tasks.get();
        }
        return null;
    }

    @PostMapping("/saveTask")
    public void saveTask(@RequestBody Tasks tasks) throws Exception {
        iBusiness.saveOrUpdateTask(tasks);
    }

    @GetMapping("/research/{description}")
    public List<Tasks> getTasksBySearch(@PathVariable("description") String description) {
        List<Tasks> tasksBySearch = iBusiness.readTasksByDescriptionContains(description);
        return tasksBySearch;
    }

    @DeleteMapping("/deleteTask/{id}")
    public void deleteTraining(@PathVariable("id") Long id) throws Exception {
        iBusiness.deleteTask(id);

    }
}


