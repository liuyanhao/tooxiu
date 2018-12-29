package com.lxc.controller.front;

import com.lxc.controller.base.BaseController;
import com.lxc.util.Logger;
import com.lxc.util.PageData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by liuxicai on 2018/12/13 0013.
 */
@Controller
@RequestMapping(value="/order")
public class OrderController extends BaseController{

    @RequestMapping(value="/shoppingCart")
    public ModelAndView getImagetype(){
        logBefore(logger, "购物车");
        ModelAndView mv = this.getModelAndView();
        Map<String,Object> map = new HashMap<String,Object>();
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){

        }finally {
            map.put("result", result);
            logAfter(logger);
        }
        mv.setViewName("front/order/shoppingCart");
        return mv;
    }
}
