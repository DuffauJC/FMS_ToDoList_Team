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
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private IBusinessImpl iBusiness;


    @GetMapping("/all")
    public List<Category> allCategories(){

        System.out.println("okkkkkk");
        return iBusiness.getCategories();
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable("id") long id) throws Exception {
        Optional<Category> category = iBusiness.readCategoryById(id);
        if (category.isPresent()) {
            return category.get();
        }
        return null;
    }

}

