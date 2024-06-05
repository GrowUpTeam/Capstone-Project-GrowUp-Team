package com.example.animalpedia

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.recyclerview.widget.RecyclerView

class ListArticleAdapter(private val listArticle: ArrayList<Article>): RecyclerView.Adapter<ListArticleAdapter.ListViewHolder>() {
    class ListViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val imgPhoto: ImageView = itemView.findViewById(R.id.img_article)
        val tvTitle: TextView = itemView.findViewById(R.id.tv_title)
        val tvDescription: TextView = itemView.findViewById(R.id.tv_description)
        val container: ConstraintLayout = itemView.findViewById(R.id.container)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ListViewHolder {
        val view:View = LayoutInflater.from(parent.context).inflate(R.layout.item_article, parent, false)
        return ListViewHolder(view)
    }

    override fun getItemCount(): Int = listArticle.size

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        val (name, description, photo, backgroundColor) = listArticle[position]
        holder.imgPhoto.setImageResource(photo)
        holder.tvTitle.text = name
        holder.tvDescription.text = description
        holder.container.setBackgroundColor(backgroundColor)
    }
}