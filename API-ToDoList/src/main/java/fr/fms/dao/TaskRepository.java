/**
 * 
 */
package fr.fms.dao;


import fr.fms.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import fr.fms.entities.Tasks;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Stagiaires10P
 *
 */
@Repository
public interface TaskRepository  extends JpaRepository<Tasks, Long> {


    List<Tasks> findByDescriptionContains (String description);

    List<Tasks> findAll();

    List<Tasks> findByCategoryId(Long catId);
}
