package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Bloco {

public static final int TIMEOUT = 300;

/**
 *
 * @param x
 *
 * @author Natali Amaral
 * @since 18/01/2024, 11:55:24
 *
 */
public static Var Executar(@ParamMetaData(description = "x", id = "993cfd21") Var x) throws Exception {
 return new Callable<Var>() {

   private Var item = Var.VAR_NULL;

   public Var call() throws Exception {
    item =
    cronapi.database.Operations.query(Var.valueOf("app.entity.User"),Var.valueOf("select \n	u.id \nfrom \n	User u  \nwhere \n	u.userName = :userName"),Var.valueOf("userName",
    cronapi.util.Operations.getCurrentUserName()));
    System.out.println(
    cronapi.list.Operations.getTextFromList(item,
    Var.valueOf(",")).getObjectAsString());
    cronapi.util.Operations.callClientFunction(Var.valueOf("cronapi.screen.changeValueOfField"),
    Var.valueOf("User.active.id"),
    cronapi.list.Operations.getTextFromList(item,
    Var.valueOf(",")));
    return Var.VAR_NULL;
   }
 }.call();
}

}

