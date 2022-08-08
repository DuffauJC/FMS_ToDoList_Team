/**
 * 
 */
package fr.fms.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.fms.entities.Category;
import fr.fms.entities.Users;
import org.springframework.stereotype.Repository;

/**
 * @author Stagiaires10P
 *
 */
@Repository
public interface CategoryRepository  extends JpaRepository<Category, Long> {
	List<Category> findAllByUsers(Users users);
}
