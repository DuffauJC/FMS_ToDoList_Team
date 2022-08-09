/**
 * 
 */
package fr.fms.dao;


import fr.fms.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author Stagiaires10P
 *
 */
public interface RoleRepository extends JpaRepository<Role, Long> {
	List<Role> findAll();

}
