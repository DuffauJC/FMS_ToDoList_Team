package fr.fms;


import fr.fms.dao.CategoryRepository;
import fr.fms.dao.RoleRepository;
import fr.fms.dao.TaskRepository;
import fr.fms.dao.UsersRepository;
import fr.fms.entities.Category;
import fr.fms.entities.Role;
import fr.fms.entities.Tasks;
import fr.fms.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class ApiToDoListApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ApiToDoListApplication.class, args);
	}
	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	TaskRepository taskRepository;

	@Autowired
	UsersRepository usersRepository;

	@Autowired
	RoleRepository roleRepository;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Salut");
		dataCreation();
		//dataCreation();
	}

	public void dataCreation(){

		Role admin = roleRepository.save(new Role(null, "ADMIN"));
		Role user = roleRepository.save(new Role(null, "USER"));

		Users user0 = usersRepository
				.save(new Users(null, "c.lozzi@fms.com", "fms2022",  true ));
		Users user1 = usersRepository
				.save(new Users(null, "jc.duffau@fms.com", "fms2022",  true));
		Users user2 = usersRepository
				.save(new Users(null, "s.lefort@fms.com", "fms2022", true));
		Users user3 = usersRepository
				.save(new Users(null, "h.haage@fms.com", "fms2022",  true));
		Users user4 = usersRepository
				.save(new Users(null, "m.derand@fms.com", "fms2022",  true));

		Category administratif = categoryRepository.save(new Category(null,"Administratif"));
		Category comptability = categoryRepository.save(new Category(null,"Comptability"));
		Category formation = categoryRepository.save(new Category(null,"Formation"));
		Category marketing = categoryRepository.save(new Category(null,"Marketing"));
		Category humanRessource = categoryRepository.save(new Category(null,"Humane Ressources"));
		Category production = categoryRepository.save(new Category(null,"Production"));

//		Tasks Fake1 = taskRepository.save(new Tasks(null, "truc1",
//				new Date(), "Truc à test", true, formation));
//		Tasks Fake2 = taskRepository.save(new Tasks(null, "truc2",
//				new Date(), "Autre truc à test", true,formation));
//		Tasks Fake3 = taskRepository.save(new Tasks(null, "truc3",
//				new Date(), "encore autre truc", true,formation));
//		Tasks Fake4 = taskRepository.save(new Tasks(null, "truc4",
//				new Date(), "dernier truc à test", true,formation));


		Tasks taskExemple0 = taskRepository.save(new Tasks(null, "exemple 0",
				new Date(),"ce qui s'affiche sans user",
				true,  formation, user1));
		Tasks taskExemple1 = taskRepository.save(new Tasks(null, "exemple1",
				new Date(), "premier essai", true, formation,user2));

			/*Tasks taskExemple2 = taskRepository.save(new Tasks(null, "exemple2",
				new Date(), "second essai", true, marketing,user2));

		Tasks taskExemple3 = taskRepository.save(new Tasks(null, "exemple3",
				new Date(), "troisieme essai", true, marketing,user2));

		Tasks taskExemple4 = taskRepository.save(new Tasks(null, "exemple4",
				new Date(), "quatrieme essai", true, comptability,user2));

		Tasks taskExemple5 = taskRepository.save(new Tasks(null, "exemple5",
				new Date(), "cinquieme essai", true, administratif,user2));

		Tasks taskExemple6 = taskRepository.save(new Tasks(null, "exemple6",
				new Date(), "sixieme essai", true, humanRessource,user2));

		Tasks taskExemple7 = taskRepository.save(new Tasks(null, "exemple7",
				new Date(), "septieme essai", true, marketing,user2));

		Tasks taskExemple8 = taskRepository.save(new Tasks(null, "exemple8",
				new Date(), "huitieme essai", true, production,user3));

		Tasks taskExemple9 = taskRepository.save(new Tasks(null, "exemple9",
				new Date(), "neuvieme essai", true, administratif,user1));

		Tasks taskExemple10 = taskRepository.save(new Tasks(null, "exemple10",
				new Date(), "dixieme essai", true, production,user3));

		Tasks taskExemple11 = taskRepository.save(new Tasks(null, "exemple11",
				new Date(), "onzieme essai", true, marketing,user3));

		 */
	}

}


