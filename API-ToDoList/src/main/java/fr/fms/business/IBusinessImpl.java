/**
 * 
 */
package fr.fms.business;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import fr.fms.dao.CategoryRepository;
import fr.fms.dao.TaskRepository;
import fr.fms.dao.UsersRepository;
import fr.fms.entities.Tasks;
import fr.fms.entities.Users;
import fr.fms.entities.Category;


/**
 * @author Stagiaires10P
 *
 */
@Service
public class IBusinessImpl implements IBusiness {
	
	@Autowired
	TaskRepository taskRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	UsersRepository usersRepository;
	
	@Autowired
	EntityManager entityManager;


	
	@Override
	public List<Category> findAllCategoriesByUsers(Users users) throws Exception {
		//return categoryRepository.findAllByUsers(users);
		return null;
	}

	@Override
	public void saveOrUpdateTask(Tasks task) throws Exception {
		taskRepository.save(task);
	}

	@Override
	public void saveOrUpdateCategory(Category category) throws Exception {
		categoryRepository.save(category);		
	}

	@Override
	public void deleteTask(Long id) throws Exception {
		taskRepository.deleteById(id);		
	}
	
	@Override
	public void deleteCategory(Long id) throws Exception {
		categoryRepository.deleteById(id);		
	}



	@Override
	public Optional<Category> readCategoryById(Long id) throws Exception {
		return categoryRepository.findById(id);
	}

	@Override
	public Optional<Tasks> readTasksById(Long id) throws Exception {
		return taskRepository.findById(id);
	}

	@Override
	public Optional<Users> getUserByMail(String mail) throws Exception {
//		Users userReceived =
//		Users user = new Users(userReceived.getId(), userReceived.getMail(), userReceived.getPassword(),
//				userReceived.getActive());
		return usersRepository.findByMail(mail);
	}



	public Date parseDate(String date) {
			return new Date("yyyy-MM-dd HH:mm:ss");

	}

	/**
	 * @return
	 */
	@Override
	public List<Tasks> getTasks() {
System.out.println(taskRepository.findAll());
		return taskRepository.findAll();

	}

	/**
	 * @return
	 */
	@Override
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}

}
