/**
 * 
 */
package fr.fms.entities;

import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Stagiaires10P
 *
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Email
	private String mail;

	@NotNull
	private String password;

	@OneToMany(mappedBy = "users")
	@JsonIgnore
	private Collection<Tasks> task;
	
	@OneToMany(mappedBy = "users")
	@JsonIgnore
	private Collection<Category> category;
	
	@NotNull
	private Boolean active;

	@ManyToMany
	@JoinTable(
			name = "users_role",
			joinColumns = {@JoinColumn(name = "usersId")},
			inverseJoinColumns = {@JoinColumn(name = "roleId")})@JsonIgnore
	private List<Role> role;
	
	/**
	 * @param id
	 * @param password
	 */
	public Users(Long id, String mail, String password) {
		this.id = id;
		this.mail = mail;
		this.password = password;
	}
	
	/**
	 * @param id
	 * @param mail
	 * @param password
	 * @param active
	 */
	public Users(Long id, @NotNull String mail, @NotNull String password, @NotNull Boolean active) {
		this.id = id;
		this.mail = mail;
		this.password = password;
		this.active = active;
	}

	public Users(Long id, @NotNull String mail, @NotNull String password, @NotNull Boolean active, @NotNull List<Role> role) {
		this.id = id;
		this.mail = mail;
		this.password = password;
		this.active = active;
		this.role = role;
	}
	
	/**
	 * @param id
	 * @param mail
	 */
	public Users(Long id, @NotNull String mail) {
		this.id = id;
		this.mail = mail;
	}
}
