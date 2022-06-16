//  Ela deverá ter um atributo id (inteiro) e, além do id, um atributo Double chamado valor
//          (formato 999,99) e pelo menos mais 5 atributos (no total, 7 atributos).
public class Livro {
  private int id;
  private Double valor;
  private String nome;
  private String genero;
  private String autor;
  private Integer quantidadesPagina;


  //ESSE CONSTRUTOR NÃO DEVE SER ALTERADO, POIS É USADO NOS TESTES
  public Livro(int id, Double valor) {
    this.id = id;
    this.valor = valor;
  }

  //Esse construtor deve ser cheio (receber todos os atributos criados na classe)
  //Esse construtor (cheio) deve ser usado na classe com método main para testar o método de exportação
  public Livro(int id, Double valor, String nome, String genero, String autor, Integer quantidadesPagina ) {
    this.id = id;
    this.valor = valor;
    this.nome = nome;
    this.genero = genero;
    this.autor = autor;
    this.quantidadesPagina = quantidadesPagina;
  }

  @Override
  public String toString() {
    return String.format("%05d %-30s %010.2f %-15s %-20s %07d", getId(), getNome(), getValor(), getGenero(), getAutor(), getQuantidadesPagina());
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getGenero() {
    return genero;
  }

  public void setGenero(String genero) {
    this.genero = genero;
  }

  public String getAutor() {
    return autor;
  }

  public void setAutor(String autor) {
    this.autor = autor;
  }

  public Integer getQuantidadesPagina() {
    return quantidadesPagina;
  }

  public void setQuantidadesPagina(Integer quantidadesPagina) {
    this.quantidadesPagina = quantidadesPagina;
  }


  //Complete os getters e setters
  public Integer getId() {
    return id;
  }

  public void setId(int id) {

  }

  public Double getValor() {
    return null;
  }

  public void setValor(Double valor) {
  }
}
