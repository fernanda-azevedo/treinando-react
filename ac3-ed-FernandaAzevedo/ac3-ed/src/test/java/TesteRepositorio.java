import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TesteRepositorio {

  @Test
  public void save(){
    Livro temaLivreObjetoTest = new Livro(1, 100.0);

    Repositorio repositorioTest = new Repositorio();
    repositorioTest.save(temaLivreObjetoTest);

    assertEquals(1, repositorioTest.getLivros().size());
    assertEquals(1, repositorioTest.getLivros().get(0).getId());
    assertEquals(100.0, repositorioTest.getLivros().get(0).getValor());
  }

  @Test
  public void deleteById(){
    Livro temaLivreObjetoTest01 = new Livro(1, 100.0);
    Livro temaLivreObjetoTest02 = new Livro(2, 101.0);
    Livro temaLivreObjetoTest03 = new Livro(3, 102.0);

    Repositorio repositorioTest = new Repositorio();

    repositorioTest.save(temaLivreObjetoTest01);
    repositorioTest.save(temaLivreObjetoTest02);
    repositorioTest.save(temaLivreObjetoTest03);

    repositorioTest.deleteById(1);

    assertEquals(2, repositorioTest.getLivros().size());
    assertEquals(2, repositorioTest.getLivros().get(0).getId());
    assertEquals(101.0, repositorioTest.getLivros().get(0).getValor());

    assertEquals(temaLivreObjetoTest01, repositorioTest.getPilha().peek());

    assertThrows(IllegalArgumentException.class, () -> repositorioTest.deleteById(100));

  }

//  @Test
//  public void increaseValueById(){
//    Livro temaLivreObjetoTest01 = new Livro(1, 100.0);
//
//    Repositorio repositorioTest = new Repositorio();
//
//    repositorioTest.save(temaLivreObjetoTest01);
//    repositorioTest.increaseValueById(1);
//
//    assertEquals(130.0, repositorioTest.increaseValueById().get(0).getValor());
//    assertThrows(IllegalArgumentException.class, () -> repositorioTest.increaseValueById(100));
//
//  }

  @Test
  public void undo(){
    Livro temaLivreObjetoTest01 = new Livro(1, 100.0);
    Livro temaLivreObjetoTest02 = new Livro(2, 101.0);
    Livro temaLivreObjetoTest03 = new Livro(3, 102.0);

    Repositorio repositorioTest = new Repositorio();

    repositorioTest.save(temaLivreObjetoTest01);
    repositorioTest.save(temaLivreObjetoTest02);
    repositorioTest.save(temaLivreObjetoTest03);

    repositorioTest.deleteById(1);
    repositorioTest.deleteById(2);
    repositorioTest.deleteById(3);

//    repositorioTest.undo();

    assertEquals(1, repositorioTest.getLivros().size());
    assertEquals(3, repositorioTest.getLivros().get(0).getId());
    assertEquals(102.0, repositorioTest.getLivros().get(0).getValor());
    assertEquals(temaLivreObjetoTest02, repositorioTest.getFila().peek());

//    repositorioTest.undo();
//    repositorioTest.undo();
//    assertThrows(IllegalArgumentException.class, () -> repositorioTest.undo());

  }

  @Test
  public void delayIncreaseValue(){
    Repositorio repositorioTest = new Repositorio();

    repositorioTest.delayIncreaseValue(1);
    repositorioTest.delayIncreaseValue(2);
    repositorioTest.delayIncreaseValue(3);

//    assertEquals(1, repositorioTest.getFilaOperacao().peek());
  }

  @Test
  public void flush(){
    Livro temaLivreObjetoTest01 = new Livro(1, 101.0);
    Livro temaLivreObjetoTest02 = new Livro(2, 102.0);
    Livro temaLivreObjetoTest03 = new Livro(3, 103.0);
    Livro temaLivreObjetoTest04 = new Livro(4, 104.0);
    Livro temaLivreObjetoTest05 = new Livro(5, 105.0);

    Repositorio repositorioTest = new Repositorio();

    repositorioTest.save(temaLivreObjetoTest01);
    repositorioTest.save(temaLivreObjetoTest02);
    repositorioTest.save(temaLivreObjetoTest03);
    repositorioTest.save(temaLivreObjetoTest04);
    repositorioTest.save(temaLivreObjetoTest05);

    repositorioTest.delayIncreaseValue(1);
    repositorioTest.delayIncreaseValue(2);
    repositorioTest.delayIncreaseValue(3);

    repositorioTest.flush(2);
//
//    assertEquals(1, repositorioTest.getContadorOperacoes());
//    assertEquals(5, repositorioTest.getObjetosTemaLivre().size());
//    assertEquals(1, repositorioTest.getObjetosTemaLivre().get(0).getId());
//    assertEquals(3, repositorioTest.getFilaOperacao().peek());
//    assertEquals(131.0, repositorioTest.getObjetosTemaLivre().get(0).getValor());
//    assertEquals(132.0, repositorioTest.getObjetosTemaLivre().get(1).getValor());
//    assertEquals(103.0, repositorioTest.getObjetosTemaLivre().get(2).getValor());
//    assertEquals(104.0, repositorioTest.getObjetosTemaLivre().get(3).getValor());
//    assertEquals(105.0, repositorioTest.getObjetosTemaLivre().get(4).getValor());
  }

}
