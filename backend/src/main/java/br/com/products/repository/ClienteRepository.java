package br.com.products.repository;

//import vitals
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import component
import br.com.products.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
 List<Cliente> findByNomeCliStartingWith(String nome);  
}
