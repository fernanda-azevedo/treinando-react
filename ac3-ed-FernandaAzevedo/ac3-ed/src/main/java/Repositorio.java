import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Repositorio {
  private List<Livro> livros;
  private PilhaObj<Integer> pilha;
  private FilaObj<Integer> fila;
  private int contadorDesfeitas;

//  c) Classe Repositorio, que deve ter como atributos:
//          - uma lista, que deve ser um List <TemaLivre>, sendo TemaLivre a classe definida no item (a).
//          - uma pilha, que deve ser um objeto de PilhaObj <TemaLivre> de tamanho 10.
//          - uma fila, que deve ser um objeto de FilaObj <Integer> de tamanho 10.
//
//  O construtor dessa classe não recebe argumentos e faz o new da lista, da pilha e da fila.
//
//  OBS: procure sempre utilizar os métodos da classe Repositorio para efetuar as operações necessárias.
//
//  Essa classe deve ter os métodos:
  public Repositorio() {
    livros = new ArrayList<>();
    pilha = new PilhaObj<>(10);
    fila = new FilaObj<Integer>(10);
    contadorDesfeitas = 0;
  }

  //(c1) save(TemaLivre obj) - void - recebe um objeto da classe do item (a)
  // e salva esse objeto na lista do repositório.
  public void save(Livro livro){
    this.livros.add(livro);
    this.pilha.push(livro.getId());
    contadorDesfeitas++;
  }

//  (c2) deleteById (int id) - void - recebe o id referente ao objeto que deve ser removido da lista
//  do repositório. Se o id não existir, lance uma IllegalArgumentException. Se o id existir,
//  antes de remover o objeto da lista, seu programa dever empilhar o objeto na pilha, pois a
//  operação deleteById pode ser desfeita.
  public void deleteById(int id){
    boolean livroExiste = false;
    Livro livroAux = null;
    for (Livro livro : livros) {
      if (livro.getId().equals(id)) {
        livroAux = livro;
        livroExiste = true;
      }
    }
    if (!livroExiste) {
      throw new IllegalArgumentException("Id inválido!");
    } else {
      livros.remove(livroAux);
      contadorDesfeitas--;
    }
  }

//  (c3) increaseValueById(int id) – void - recebe o id do objeto, cujo atributo valor deve ganhar um
//  aumento de 30. Se o id não existir, lance uma IllegalArgumentException, senão atualiza atributo
//  valor correspondente a esse id.
//  public void increaseValueById(int id){
//
//  }

//  (c4) undo() - void - corresponde à operação desfazer. Se a pilha estiver vazia, lance uma
//  IllegalStateException. Se a pilha não estiver vazia, desfaz uma operação, sendo que a única
//  operação que pode ser desfeita é um deleteById.
  public void undo(int qtdOperacoes){
    if (qtdOperacoes > contadorDesfeitas || qtdOperacoes < 1) {
      throw new IllegalArgumentException("Quantidade de operações inválidas");
    } else {
      for (int i = qtdOperacoes; i > 0; i--) {
        this.deleteById(pilha.pop());
      }
    }
  }

//  (c5) delayIncreaseValue (ind id) - void - essa operação agenda
//  o increaseValueById para ser executada num momento futuro;
//  recebe um id de um objeto, e enfileira esse id na fila, para que
//  o increaseValueById correspondente seja executado posteriormente,
//  pela operação flush.
  public void delayIncreaseValue(int id){
    //Enfileirando o id na fila para ser executado no flush
    fila.insert(id);
  }


//  (c6) flush(int qtdOperacoes) - void - esta operação executa a qtdOperacoes que estão enfileiradas.
//  Se qtdOperacoes for negativo ou maior que o tamanho da fila, lance uma IllegalArgumentException.
//  Senão, retire da fila as operações (quantidade de operações a serem retiradas = argumento qtdOperacoes) e execute-as.
//  As operações enfileiradas são o increaseValueById. (veja método c5).
  public void flush(int qtdOperacoes){
    if (fila.isEmpty() || qtdOperacoes < 0 && qtdOperacoes > fila.getFila().length){
      throw new IllegalArgumentException("Não tem itens para serem removidos");
    }
    while (!fila.isEmpty()) {
      //Retirando da fila as operações com o poll
      this.delayIncreaseValue(fila.poll());
    }
  }

  //GETTERS & SETTERS
  public List<Livro> getLivros() {
    return livros;
  }

  public void setLivros(List<Livro> livros) {
    this.livros = livros;
  }

  public PilhaObj<Integer> getPilha() {
    return pilha;
  }

  public void setPilha(PilhaObj<Integer> pilha) {
    this.pilha = pilha;
  }

  public FilaObj<Integer> getFila() {
    return fila;
  }

  public void setFila(FilaObj<Integer> fila) {
    this.fila = fila;
  }

  public int getContadorDesfeitas() {
    return contadorDesfeitas;
  }

  public void setContadorDesfeitas(int contadorDesfeitas) {
    this.contadorDesfeitas = contadorDesfeitas;
  }

  //Começando  a gravar o arquivo txt

//  (d7) exportTXT (String nomeArquivo) - void - recebe o nome do arquivo TXT a ser gravado. Grava um arquivo TXT, com o conteúdo da lista do repositório, seguindo o documento de layout definido no item (b). O arquivo TXT deve ser entregue na pasta do projeto.
  public void exportTXT() {
    gravaArquivoTxt(livros, "livros.txt");
  }

  public static void gravaRegistro(String nomeArq, String registro) {
    BufferedWriter saida = null;
    // Abre o arquivo
    try {
      saida = new BufferedWriter(new FileWriter(nomeArq, true));
    } catch (IOException erro) {
      System.out.println("Erro na abertura do arquivo: " +
              erro.getMessage());
    }

    // Grava o registro e finaliza
    try {
      assert saida != null;
      saida.append(registro).append("\n");
      saida.close();
    } catch (IOException erro) {
      System.out.println("Erro na gravação do arquivo: " +
              erro.getMessage());
    }
  }

  public static void gravaArquivoTxt(List<Livro> lista, String nomeArq) {

    int contaRegistro = 0;

    // Montando o registro de header
    String header = "00LIVRO";
    Date dataDeHoje = new Date();
    SimpleDateFormat formataData =
            new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
    header += formataData.format(dataDeHoje);
    header += "01";

    // Gravando o registro do header
    gravaRegistro(nomeArq, header);

    // Montando e gravando o corpo
    String corpo;
    for (Livro livro : lista) {
      System.out.println("Entrou no for");
      corpo = "02";
      System.out.println(livro.getId());
      corpo += String.format("%05d", livro.getId());
      System.out.println(livro.getId());
      corpo += String.format("%-30.30s", livro.getNome());
      System.out.println(livro.getNome());
      corpo += String.format("%010.2f", livro.getValor());
      corpo += String.format("%-15.15s", livro.getGenero());
      corpo += String.format("%-20.20s", livro.getAutor());
      corpo += String.format("%07d", livro.getQuantidadesPagina());
      gravaRegistro(nomeArq, corpo);
      contaRegistro++;
    }

    // Montando e gravando o trailer
    String trailer = "01";
    trailer += String.format("%010d", contaRegistro);
    gravaRegistro(nomeArq, trailer);

  }
}
