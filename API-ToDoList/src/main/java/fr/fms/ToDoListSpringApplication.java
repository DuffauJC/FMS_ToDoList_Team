package fr.fms;

import fr.fms.business.IBusinessImpl;
import fr.fms.dao.CategoryRepository;
import fr.fms.dao.RoleRepository;
import fr.fms.dao.TaskRepository;
import fr.fms.dao.UsersRepository;
import fr.fms.entities.Category;
import fr.fms.entities.Role;
import fr.fms.entities.Task;
import fr.fms.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@SpringBootApplication
public class ToDoListSpringApplication implements CommandLineRunner{

	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	TaskRepository taskRepository;

	@Autowired
	UsersRepository usersRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	IBusinessImpl business;


	public static void main(String[] args) {
		SpringApplication.run(ToDoListSpringApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Salut");		
	}

	public void dataCreation(){

		Role admin = roleRepository.save(new Role(null, "ADMIN"));
		Role user = roleRepository.save(new Role(null, "USER"));

		Users user0 = usersRepository
				.save(new Users(null, "c.lozzi@fms.com", business.encodePassword("fms2022"), null, null, true, null));
		Users user1 = usersRepository
				.save(new Users(null, "jc.duffau@fms.com", business.encodePassword("fms2022"), null, null, true, null));
		Users user2 = usersRepository
				.save(new Users(null, "s.lefort@fms.com", business.encodePassword("fms2022"), null, null, true, null));
		Users user3 = usersRepository
				.save(new Users(null, "h.haage@fms.com", business.encodePassword("fms2022"), null, null, true, null));
		Users user4 = usersRepository
				.save(new Users(null, "m.derand@fms.com", business.encodePassword("fms2022"), null, null, true, null));

		Category administratif = categoryRepository.save(new Category(null,"Administratif",null,null));
		Category comptability = categoryRepository.save(new Category(null,"Comptability",null,null));
		Category formation = categoryRepository.save(new Category(null,"Formation",null,null));
		Category marketing = categoryRepository.save(new Category(null,"Marketing",null,null));
		Category humanRessource = categoryRepository.save(new Category(null,"Humane Ressources",null,null));
		Category production = categoryRepository.save(new Category(null,"Production",null,null));

		Task taskExemple0 = taskRepository.save(new Task(null, "exemple 0",
				 business.parseDate("2022-05-15 09:32:51"),"ce qui s'affiche sans user",
				true, false, formation, user1));
		Task taskExemple1 = taskRepository.save(new Task(null, "exemple1",
				business.parseDate("2022-05-15 09:32:51"), "premier essai", true,false, formation,user2));

		Task taskExemple2 = taskRepository.save(new Task(null, "exemple2",
				business.parseDate("2022-06-17 09:32:51"), "second essai", true,false, marketing,user2));

		Task taskExemple3 = taskRepository.save(new Task(null, "exemple3",
				business.parseDate("2022-06-17 09:32:51"), "troisieme essai", true,false, marketing,user2));

		Task taskExemple4 = taskRepository.save(new Task(null, "exemple4",
				business.parseDate("2022-06-17 09:32:51"), "quatrieme essai", true,false, comptability,user2));

		Task taskExemple5 = taskRepository.save(new Task(null, "exemple5",
				business.parseDate("2022-06-17 09:32:51"), "cinquieme essai", true,false, administratif,user2));

		Task taskExemple6 = taskRepository.save(new Task(null, "exemple6",
				business.parseDate("2022-06-17 09:32:51"), "sixieme essai", true,false, humanRessource,user2));

		Task taskExemple7 = taskRepository.save(new Task(null, "exemple7",
				business.parseDate("2022-06-17 09:32:51"), "septieme essai", true,false, marketing,user2));

		Task taskExemple8 = taskRepository.save(new Task(null, "exemple8",
				business.parseDate("2022-06-17 09:32:51"), "huitieme essai", true,false, production,user3));

		Task taskExemple9 = taskRepository.save(new Task(null, "exemple9",
				business.parseDate("2022-06-17 09:32:51"), "neuvieme essai", true,false, administratif,user1));

		Task taskExemple10 = taskRepository.save(new Task(null, "exemple10",
				business.parseDate("2022-05-15 09:32:51"), "dixieme essai", true,false, production,user3));

		Task taskExemple11 = taskRepository.save(new Task(null, "exemple11",
				business.parseDate("2022-05-15 09:32:51"), "onzieme essai", true,false, marketing,user3));


	}

}
