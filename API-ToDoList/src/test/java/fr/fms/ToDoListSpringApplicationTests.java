
package fr.fms;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

import java.util.Date;

import fr.fms.entities.Category;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import fr.fms.business.IBusinessImpl;
import fr.fms.entities.Tasks;
import fr.fms.entities.Users;

@SpringBootTest
class ToDoListSpringApplicationTests {

	@Autowired
	IBusinessImpl business;

	@Test
	void contextLoads() {
		assertFalse(1 == 2);
	}

	@Test
	void testAddTask() {
        Tasks task = new Tasks(1234567890L,"entre 2 et 20", new Date(),"entre 2 et 100",true,
                new Category("Je sui une categorie"),new Users(null,"mon mail","mot de passe",true));

        try {
            business.saveOrUpdateTask(task);
            assertEquals(business.readTasksById(1234567890L).get(),task);
        } catch(Exception e) {
            e.printStackTrace();
        }

	}

	@Test
	void testReadCategories() {
		try {
			assertThat(business.readCategoryById((long) 1)).isNotNull();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	void testGetTasks() {
		Tasks task = new Tasks(1234567890L,"entre 2 et 20", new Date(),"entre 2 et 100",true,
				new Category("Je sui une categorie"),new Users(null,"mon mail","mot de passe",true));
		try {
			assertThat(business.readTasksById((long) 1234567890)).isNotNull();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	void testGetArticleDeleted() {
		Tasks task = new Tasks(1234567890L,"entre 2 et 20", new Date(),"entre 2 et 100",true,
				new Category("Je sui une categorie"),new Users(null,"mon mail","mot de passe",true));
		try {
			business.saveOrUpdateTask(task);
			business.deleteTask(1234567890L);
			assertThat(business.readTasksById((long) 1234567890)).isNull();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	@Test
	void testReadByDescriptionContains() {
		Tasks task = new Tasks(1234567890L,"entre 2 et 20", new Date(),"entre 2 et 100",true,
				new Category("Je sui une categorie"),new Users(null,"mon mail","mot de passe",true));
		try {
			business.saveOrUpdateTask(task);
			assertEquals(business.readTasksByDescriptionContains("2 et 100").size(),1);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
