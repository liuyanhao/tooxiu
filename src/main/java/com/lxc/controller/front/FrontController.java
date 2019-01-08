package com.lxc.controller.front;

import com.lxc.controller.base.BaseController;
import com.lxc.service.system.appuser.AppuserManager;
import com.lxc.service.tooxiu.front.FrontManager;
import com.lxc.util.AppUtil;
import com.lxc.util.Logger;
import com.lxc.util.PageData;
import com.lxc.util.Tools;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by liuxicai on 2018/12/9 0009.
 */
@Controller
@RequestMapping(value="/front")
public class FrontController  {

    protected Logger logger = Logger.getLogger(this.getClass());

    @Resource(name="frontService")
    private FrontManager frontService;

    @Resource(name="appuserService")
    private AppuserManager appuserService;
    /** new PageData对象
     * @return
     */
    public PageData getPageData(){
        return new PageData(this.getRequest());
    }

    /**得到ModelAndView
     * @return
     */
    public ModelAndView getModelAndView(){
        return new ModelAndView();
    }

    /**得到request对象
     * @return
     */
    public HttpServletRequest getRequest() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return request;
    }
    /**
     * 首页
     * @return
     */
    @RequestMapping(value="/home")
    public ModelAndView getHome(){
        logBefore(logger, "首页");
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
        mv.setViewName("front/home/index");
        return mv;
    }

    /**
     * 首页
     * @return
     */
    @RequestMapping(value="/imagetype")
    public ModelAndView getImagetype(){
        logBefore(logger, "首页");
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
        mv.setViewName("front/iamgeType/iamgeType");
        return mv;
    }


    /**
     * 登录
     * @return
     */
    @RequestMapping(value="/login")
    public ModelAndView login(){
        logBefore(logger, "登录");
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
        mv.setViewName("front/login/login");
        return mv;
    }

    /**
     * 登录
     * @return
     */
    @RequestMapping(value="/to_login")
    public ModelAndView toLogin(){
        logBefore(logger, "去登录页");
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
        mv.setViewName("front/login/login");
        return mv;
    }

    /**
     * 登录
     * @return
     */
    @RequestMapping(value="/findPassword")
    public ModelAndView findPassword(){
        logBefore(logger, "找回密码");
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
        mv.setViewName("front/login/findPassword");
        return mv;
    }

    /**
     * 校验用户名 登录账号
     * @return
     */
    @RequestMapping(value="/checkUsername")
    @ResponseBody
    public Object checkUsername(){
        logBefore(logger, "校验用户名 登录账号");
        Map<String,Object> map = new HashMap<String,Object>();
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
     * 验证码
     * @return
     */
    @RequestMapping(value="/getVerify")
    @ResponseBody
    public Object getVerify(){
        logBefore(logger, "验证码");
        Map<String,Object> map = new HashMap<String,Object>();
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
     * 校验验证码
     * @return
     */
    @RequestMapping(value="/chekCode")
    @ResponseBody
    public Object chekCode(){
        logBefore(logger, "校验验证码");
        Map<String,Object> map = new HashMap<String,Object>();
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
     * 校验手机验证码
     * @return
     */
    @RequestMapping(value="/verifyMobileCode")
    @ResponseBody
    public Object verifyMobileCode(){
        logBefore(logger, "校验手机验证码");
        Map<String,Object> map = new HashMap<String,Object>();
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
     * 发送手机验证码
     * @return
     */
    @RequestMapping(value="/sendMobileCode2")
    @ResponseBody
    public Object sendMobileCode2(){
        logBefore(logger, "发送手机验证码");
        Map<String,Object> map = new HashMap<String,Object>();
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
     * 注册
     * @return
     */
    @RequestMapping(value="/register")
    public ModelAndView register(){
        logBefore(logger, "会员注册");
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
        mv.setViewName("front/login/register");
        return mv;
    }



    /**
     * 退出
     * @return
     */
    @RequestMapping(value="/public-logout")
    public ModelAndView publicLogout(){
        logBefore(logger, "退出");
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
        mv.setViewName("front/public-logout");
        return mv;
    }

    /**
     * 根据用户名获取会员信息
     * @return
     */
    @RequestMapping(value="/getAppuserByUm")
    @ResponseBody
    public Object getAppuserByUsernmae(){
        logBefore(logger, "根据用户名获取会员信息");
        Map<String,Object> map = new HashMap<String,Object>();
        PageData pd = new PageData();
        pd = this.getPageData();
        String result = "00";
        try{
            if(Tools.checkKey("USERNAME", pd.getString("FKEY"))){	//检验请求key值是否合法
                if(AppUtil.checkParam("getAppuserByUsernmae", pd)){	//检查参数
                    pd = appuserService.findByUsername(pd);
                    map.put("pd", pd);
                    result = (null == pd) ?  "02" :  "01";
                }else {
                    result = "03";
                }
            }else {
                result = "05";
            }
        }catch (Exception e){
            logger.error(e.toString(), e);
        }finally{
            map.put("result", result);
            logAfter(logger);
        }
        return AppUtil.returnObject(new PageData(), map);
    }

    public static void logBefore(Logger logger, String interfaceName){
        logger.info("");
        logger.info("start");
        logger.info(interfaceName);
    }

    public static void logAfter(Logger logger){
        logger.info("end");
        logger.info("");
    }
}
