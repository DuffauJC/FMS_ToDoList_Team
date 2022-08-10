<<<<<<< Updated upstream
//package fr.fms;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertFalse;
//
//import java.time.LocalDate;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//
//import fr.fms.business.IBusinessImpl;
//import fr.fms.entities.Tasks;
//import fr.fms.entities.Users;
//
//@SpringBootTest
//class ToDoListSpringApplicationTests {
//
//	@Autowired
//	IBusinessImpl business;
//
//	@Test
//	void contextLoads() {
//		assertFalse(1 == 2);
//	}
//
=======
package fr.fms;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

import java.time.LocalDate;

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
	void testEqualUser() {
		try {
			assertEquals((long) 2, business.getUserByMail("saralune@mail.fr").getId());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	void testGetArticle() {
		try {
			assertThat(business.readTasksById((long) 12)).isNotNull();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	void testGetArticleDeleted() {
		try {
			assertThat(business.readTasksById((long) 3)).isNull();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	void testCountCategories() {
		try {
			assertEquals(business.findAllCategoriesByUsers(business.getUserByMail("test@test.fr")).size(), 1);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	void testFindCategoriesByUsers() {
		try {
			assertEquals(business.findAllCategoriesByUsers(business.getUserByMail("test@test.fr")).size(), 1);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
>>>>>>> Stashed changes
//	@Test
//	void testAddTask() {
//		try {
//			business.saveOrUpdateTask(new Tasks(null, "TacheX", business.parseDate("2022-06-08 11:45:20"), "C'est une description de test", false, false));
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	void testReadCategories() {
//		try {
//			assertThat(business.readCategoryById((long) 1)).isNotNull();
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	void testEqualUser() {
//		try {
//			assertEquals((long) 2, business.getUserByMail("saralune@mail.fr").getId());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	void testGetArticle() {
//		try {
//			assertThat(business.readTasksById((long) 12)).isNotNull();
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	void testGetArticleDeleted() {
//		try {
//			assertThat(business.readTasksById((long) 3)).isNull();
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	void testCountCategories() {
//		try {
//			assertEquals(business.findAllCategoriesByUsers(business.getUserByMail("test@test.fr")).size(), 1);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Test
//	void testFindCategoriesByUsers() {
//		try {
//			assertEquals(business.findAllCategoriesByUsers(business.getUserByMail("test@test.fr")).size(), 1);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//
////	@Test
////	void testReadByDescriptionContains() {
////		try {
////			Page<Tasks> listTasks = business.readByDescriptionContains("à faire", 0, 5, business.getUserByMail("test@test.fr"));
////			Tasks task = listTasks.getContent().get(0);
////
////			assertEquals(task.getId(), (long) 18);
////		} catch (Exception e) {
////			e.printStackTrace();
////		}
////	}
//}
