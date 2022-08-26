package br.com.products.cotroller;

//import vitals
import java.util.List;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

//import components
import br.com.products.cotroller.dto.ClienteRq;
import br.com.products.cotroller.dto.ClienteRs;
import br.com.products.model.Cliente;
import br.com.products.repository.ClienteCustomRepository;
import br.com.products.repository.ClienteRepository;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ClienteCustomRepository clienteCustomRepository;

    @GetMapping
    @CrossOrigin(origins = "*")
    public List<ClienteRs> findAll() {
        List<Cliente> clientes = clienteRepository.findAll();
        return clientes
                .stream()
                .map(ClienteRs::converter)
                .collect(Collectors.toList());
    }

    @GetMapping("/name/{nome}")
    @CrossOrigin(origins = "*")
    public List<ClienteRs> findByName(@PathVariable String nome) {
        List<Cliente> clientes = clienteRepository.findByNomeCliStartingWith(nome);
        return clientes
                .stream()
                .map(ClienteRs::converter)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ClienteRs findById(@PathVariable("id") Long id) {
        var cliente = clienteRepository.getById(id);
        return ClienteRs.converter(cliente);
    }

    @PostMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public void savePerson(@RequestBody ClienteRq cliente) {
        var c = new Cliente();
        c.setNomeCli(cliente.getNomeCli());
        c.setEndCli(cliente.getEndCli());
        c.setLimiteCred(cliente.getLimiteCred());
        c.setLimiteParc(cliente.getLimiteParc());
        clienteRepository.save(c);
    }

    @PutMapping("/{id}")
    public void updatePerson(@PathVariable("id") Long id, @RequestBody ClienteRq cliente) throws Exception {
        var c = clienteRepository.findById(id);

        if (c.isPresent()) {
            var clienteSave = c.get();
            clienteSave.setNomeCli(cliente.getNomeCli());
            clienteSave.setEndCli(cliente.getEndCli());
            clienteSave.setLimiteCred(cliente.getLimiteCred());
            clienteSave.setLimiteParc(cliente.getLimiteParc());
            clienteRepository.save(clienteSave);
        } else {
            throw new Exception("Pessoa Não encontrada");
        }
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable("id") Long id) throws Exception {
        var c = clienteRepository.findById(id);

        if (c.isPresent()) {
            clienteRepository.delete(c.get());
        } else {
            throw new Exception("Pessoa Não encontrada");
        }
    }

    @GetMapping("/filter/custom")
    public List<ClienteRs> findPersonByCustom(
            @RequestParam(value = "id", required = false) Long id,
            @RequestParam(value = "nomeCli", required = false) String nomeCli,
            @RequestParam(value = "endCli", required = false) String endCli,
            @RequestParam(value = "limiteCred", required = false) Float limiteCred,
            @RequestParam(value = "limiteParc", required = false) Float limiteParc) {
        return this.clienteCustomRepository.find(id, nomeCli, endCli, limiteCred, limiteParc)
                .stream()
                .map(ClienteRs::converter)
                .collect(Collectors.toList());
    }

}
