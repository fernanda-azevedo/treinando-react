import java.util.Scanner;

public class AppC3 {
    public static void main(String[] args) {
        Repositorio auxRepositorio = new Repositorio();
        int auxSwitch = -1;
        Scanner leitor = new Scanner(System.in);
        Scanner leitorLN = new Scanner(System.in);

        while (auxSwitch != 0) {
            System.out.print("\nEscolha uma opção a seguir:" +
                    "\n1 - Salvar novo livro" +
                    "\n2 - Exportar arquivo TXT" +
                    "\n0 - Sair \n");
            auxSwitch = leitor.nextInt();

            switch (auxSwitch) {
                case 0:
                    auxSwitch = 0;
                    System.out.println("Você encerrou o programa!");
                    break;
                case 1:
                    System.out.print("Digite o id do livro: ");
                    Integer id = leitor.nextInt();
                    System.out.print("Digite o nome do livro: ");
                    String nome = leitorLN.nextLine();
                    System.out.print("Digite o valor do livro: ");
                    Double valor = leitor.nextDouble();
                    System.out.print("Digite o gênero do livro: ");
                    String genero = leitorLN.nextLine();
                    System.out.print("Digite o nome do autor do livro: ");
                    String autor = leitorLN.nextLine();
                    System.out.print("Digite a quantidade de páginas: ");
                    Integer qtdPag = leitor.nextInt();
                    Livro livroAux = new Livro(id, valor, nome, genero, autor, qtdPag);
                    auxRepositorio.save(livroAux);
                    break;
                case 2:
                    auxRepositorio.exportTXT();
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }
}