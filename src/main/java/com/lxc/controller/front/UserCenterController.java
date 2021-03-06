package com.lxc.controller.front;

import com.lxc.controller.base.BaseController;
import com.lxc.util.AppUtil;
import com.lxc.util.Logger;
import com.lxc.util.PageData;
import com.lxc.util.Tools;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by liuxicai on 2019/1/7 0007.
 */
@Controller
@RequestMapping(value="/userCenter")
public class UserCenterController extends BaseController{
    protected Logger logger = Logger.getLogger(this.getClass());
    /** new PageData对象
     * @return
     */
    public PageData getPageData(){
        return new PageData(this.getRequest());
    }

    /**
     * 订单和 Cookie
     * @return
     */
    @RequestMapping(value="/orderToCookie")
    @ResponseBody
    public Object orderToCookie(){
        logBefore(logger, "订单和 Cookie");
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","订单信息为空！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        return AppUtil.returnObject(new PageData(), map);
    }

    /**
     * 获取用户基本信息
     * @return
     */
    @RequestMapping(value="/getUserInfo")
    @ResponseBody
    public Object getUserInfo(){
        logBefore(logger, "获取用户基本信息");
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","订单信息为空！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        return AppUtil.returnObject(new PageData(), map);
    }

    /**
     *帐户管理
     * @return
     */
    @RequestMapping(value="/accountManage")
    @ResponseBody
    public ModelAndView accountManage(){
        logBefore(logger, "帐户管理");
        Map<String,Object> map = new HashMap<String,Object>();
        ModelAndView mv = this.getModelAndView();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","帐户管理！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        mv.setViewName("front/userCenter/accountManage");
        return mv;
    }

    /**
     *我的收藏
     * @return
     */
    @RequestMapping(value="/collection")
    @ResponseBody
    public ModelAndView collection(){
        logBefore(logger, "我的收藏");
        Map<String,Object> map = new HashMap<String,Object>();
        ModelAndView mv = this.getModelAndView();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","帐户管理！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        mv.setViewName("front/userCenter/collection");
        return mv;
    }


    /**
     * 通过父ID（Parentid）获取区域列表
     * @return
     */
    @RequestMapping(value="/getAreaListByParentid")
    @ResponseBody
    public Object getAreaListByParentid(){
        logBefore(logger, "通过父ID（Parentid）获取区域列表");
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","订单信息为空！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        return AppUtil.returnObject(new PageData(), map);
    }

    /**
     *通过父ID（Parentid）获取服装类型列表
     * @return
     */
    @RequestMapping(value="/getIndustryListByParentid")
    @ResponseBody
    public Object getIndustryListByParentid(){
        logBefore(logger, "通过父ID（Parentid）获取服装列表");
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","订单信息为空！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        return AppUtil.returnObject(new PageData(), map);
    }

    /**
     * 个性订阅
     * @return
     */
    @RequestMapping(value="/subscribe")
    public ModelAndView subscribe(){
        logBefore(logger, "个性订阅");
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
        mv.setViewName("front/userCenter/subscribe");
        return mv;
    }

    /**
     * 收藏页面
     * @return
     */
    @RequestMapping(value="/favoritesAdd")
    public ModelAndView favoritesAdd(){
        logBefore(logger, "收藏页面");
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
        mv.setViewName("front/userCenter/favoritesAdd");
        return mv;
    }

    /**
     * 用户中心
     * @return
     */
    @RequestMapping(value="/userCenter")
    public ModelAndView userCenter(){
        logBefore(logger, "用户中心");
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
        mv.setViewName("front/userCenter/userCenter");
        return mv;
    }

    /**
     * 添加订阅
     * @return
     */
    @RequestMapping(value="/subscribeAdd")
    @ResponseBody
    public Object subscribeAdd(){
        logBefore(logger, "添加订阅");
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("user_type","1");  //用户类型
        map.put("status","2");    //状态码
        map.put("msg","添加订阅！");   //状态消息
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{

        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        return AppUtil.returnObject(new PageData(), map);
    }
}
