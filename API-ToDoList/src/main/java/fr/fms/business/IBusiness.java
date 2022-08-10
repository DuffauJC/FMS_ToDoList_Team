/**
 * 
 */
package fr.fms.business;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import fr.fms.entities.Category;
import fr.fms.entities.Role;
import fr.fms.entities.Tasks;
import fr.fms.entities.Users;

/**
 * @author Stagiaires10P
 *
 */
public interface IBusiness {



	/**
	 * Return a list of categories, by user, in database.
	 * @return
	 * @throws Exception
	 */
	public List<Category> findAllCategoriesByUsers(Users users) throws Exception;
	
	/**
	 * Method to add or update a task in database.
	 * @param task
	 * @throws Exception
	 */
	public void saveOrUpdateTask(Tasks task) throws Exception;
	
	/**
	 * Method to add or update a category in database.
	 * @param category
	 * @throws Exception
	 */
	public void saveOrUpdateCategory(Category category) throws Exception;
	
	/**
	 * Delete Task by its id.
	 * @param id
	 * @throws Exception
	 */
	public void deleteTask(Long id) throws Exception;
	
	/**
	 * Delete category by its id.
	 * @param id
	 * @throws Exception
	 */
	public void deleteCategory(Long id) throws Exception;
	
	/**
	 * Get task by its id.
	 * @param id
	 * @return Task
	 * @throws Exception
	 */
	public Optional<Tasks> readTasksById(Long id) throws Exception;
	
	/**
	 * Get Category by its id.
	 * @param id
	 * @return Category
	 * @throws Exception
	 */
	public Optional<Category> readCategoryById(Long id) throws Exception;
	

	
	/**
	 * Get user by its mail.
	 * @param mail
	 * @return Users
	 * @throws Exception
	 */
	public Optional<Users> getUserByMail(String mail) throws Exception;



	public Date parseDate(String date);


	public List<Tasks> getTasks();

	public List<Category> getCategories();

    List<Tasks> readTasksByDescriptionContains(String string);
}
