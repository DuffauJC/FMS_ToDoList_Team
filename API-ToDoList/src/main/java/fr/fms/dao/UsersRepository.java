/**
 * 
 */
package fr.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.fms.entities.Users;
import org.springframework.stereotype.Repository;

/**
 * @author Stagiaires10P
 *
 */
@Repository
public interface UsersRepository extends JpaRepository<Users, Long>  {
	public Users findByMail(String mail);
}
