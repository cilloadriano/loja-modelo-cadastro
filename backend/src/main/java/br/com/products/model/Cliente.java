package br.com.products.model;

//import vitals -BD
import javax.persistence.*;

@Entity
@Table(name="cliente", schema = "teste")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idcli")
    private Long id;
    
    @Column(name="nomecli")
    private String nomeCli;
    
    @Column(name="endcli")
    private String endCli;
    
    @Column(name="limitecred")
    private float limiteCred;
    
    @Column(name="limiteparc")
    private float limiteParc;
    
     public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCli() {
        return nomeCli;
    }

    public void setNomeCli(String nomeCli) {
        this.nomeCli = nomeCli;
    }
    
    public String getEndCli() {
        return endCli;
    }

    public void setEndCli(String endCli) {
        this.endCli = endCli;
    }
    
    public float getLimiteCred() {
        return limiteCred;
    }

    public void setLimiteCred(float limiteCred ) {
        this.limiteCred = limiteCred;
    }
    
    public float getLimiteParc() {
        return limiteParc;
    }

    public void setLimiteParc(float limiteParc ) {
        this.limiteParc = limiteParc;
    }
    
    
}
