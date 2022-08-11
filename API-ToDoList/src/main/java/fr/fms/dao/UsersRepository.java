/**
 * 
 */
package fr.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.fms.entities.Users;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Stagiaires10P
 *
 */
@Repository
public interface UsersRepository extends JpaRepository<Users, Long>  {
	public Optional<Users> findByMail(String mail);

	Optional<Users> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByMail(String mail);
}
