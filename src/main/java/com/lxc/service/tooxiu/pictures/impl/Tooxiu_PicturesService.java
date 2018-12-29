package com.lxc.service.tooxiu.pictures.impl;

import com.lxc.dao.DaoSupport;
import com.lxc.entity.Page;
import com.lxc.service.tooxiu.pictures.Tooxiu_PicturesManager;
import com.lxc.util.PageData;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


/** 图片管理
 * @author lxc 1094921525qq
 * 修改时间：2018.01.2
 */
@Service("tooxiu_PicturesService")
public class Tooxiu_PicturesService implements Tooxiu_PicturesManager {

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	/**列表
	 * @param page
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> list(Page page)throws Exception{
		return (List<PageData>)dao.findForList("Tooxiu_PicturesMapper.datalistPage", page);
	}
	
	/**新增
	 * @param pd
	 * @throws Exception
	 */
	public void save(PageData pd)throws Exception{
		dao.save("Tooxiu_PicturesMapper.save", pd);
	}
	
	/**删除
	 * @param pd
	 * @throws Exception
	 */
	public void delete(PageData pd)throws Exception{
		dao.delete("Tooxiu_PicturesMapper.delete", pd);
	}
	
	/**修改
	 * @param pd
	 * @throws Exception
	 */
	public void edit(PageData pd)throws Exception{
		dao.update("Tooxiu_PicturesMapper.edit", pd);
	}
	
	/**通过id获取数据
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public PageData findById(PageData pd)throws Exception{
		return (PageData)dao.findForObject("Tooxiu_PicturesMapper.findById", pd);
	}
	
	/**批量删除
	 * @param ArrayDATA_IDS
	 * @throws Exception
	 */
	public void deleteAll(String[] ArrayDATA_IDS)throws Exception{
		dao.delete("Tooxiu_PicturesMapper.deleteAll", ArrayDATA_IDS);
	}
	
	/**批量获取
	 * @param ArrayDATA_IDS
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<PageData> getAllById(String[] ArrayDATA_IDS)throws Exception{
		return (List<PageData>)dao.findForList("Tooxiu_PicturesMapper.getAllById", ArrayDATA_IDS);
	}
	
	/**删除图片
	 * @param pd
	 * @throws Exception
	 */
	public void delTp(PageData pd)throws Exception{
		dao.update("Tooxiu_PicturesMapper.delTp", pd);
	}
	
}

