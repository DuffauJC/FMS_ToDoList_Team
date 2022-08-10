/**
 * 
 */
package fr.fms.entities;

import java.util.Collection;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
public class Category {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 2, max = 50, message = "La taille doit être comprise entre 2 et 50 caractères.")
	private String name;

	@OneToMany(fetch = FetchType.EAGER)
	@JsonIgnore
	@JoinColumn(name = "category_id")
	private List<Tasks> tasks;


	/**
	 * @param id
	 * @param name
	 */
	public Category(Long id,
			@NotNull @Size(min = 2, max = 50, message = "La taille doit être comprise entre 2 et 50 caractères.") String name) {
		this.id = id;
		this.name = name;
	}

	/**
	 * @param name
	 */
	public Category(
			@NotNull @Size(min = 2, max = 50, message = "La taille doit être comprise entre 2 et 50 caractères.") String name) {
		this.name = name;
	}
}
